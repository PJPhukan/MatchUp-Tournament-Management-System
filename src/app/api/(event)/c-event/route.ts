
import { ApiResponse } from "@/helpers/ApiResponse";
import { decodeToken } from "@/helpers/authHelpers";
import { cloudinaryUpload } from "@/helpers/Cloudinary";
import { dbConnect } from "@/lib/dbConnection";
import { EventModel } from "@/model/event.model";
import { UserModel } from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";



//create a new event
export async function POST(request: NextRequest): Promise<NextResponse> {

    await dbConnect();

    try {

        // Extract JSON data from the request body
        const { name, poster, startDate, endDate, vill, state, district, pincode, description } = await request.json();


        //decode payload from the request
        const tokenId = decodeToken(request);

        // Check if the user is authenticated and verified
        if (!tokenId) {
            return NextResponse.json({
                success: false,
                message: "Invalid or expired token.",
                statusCode: 401
            });
        }

        //check user exist or not by user id
        let user = await UserModel.findById(tokenId)?.select("-password")

        //check user is authenticated or not
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found.",
                statusCode: 404
            });
        }

        //check user is verified or not
        if (!user.isVerified) {
            return NextResponse.json({
                success: false,
                message: "User is not verified.",
                statusCode: 401
            });
        }
        //TODO: Upload image 3rd party resources 
        console.log(poster)
        // Upload poster to Cloudinary
        let posterUrl: string;
        const cloudinaryResponse = await cloudinaryUpload(poster);
        if (cloudinaryResponse && cloudinaryResponse.url) {
            console.log(cloudinaryResponse.url)
            posterUrl = "cloudinaryResponse.url"
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to upload poster to Cloudinary",
                statusCode: 500
            });

        }

        let location: {
            vill: string;
            pincode: number;
            state: string;
            district: string;
        } = {
            vill,
            pincode,
            state,
            district
        };
        // create a new event
        let event = await EventModel.create({
            name,
            poster: posterUrl,
            startDate,
            endDate,
            location: location,
            description,
            userId: user._id
        });

        //check event is successfully created or not
        if (!event) {
            return NextResponse.json({
                success: false,
                message: "Failed to create a new event",
                statusCode: 401
            });
        }

        //send successfull message to the user
        let response = {
            success: true,
            message: "event created successfully",
            statusCode: 201,
            data: event
        }
        return NextResponse.json(response);


    } catch (error) {
        console.error("Error while creating a new event", error);
        const response: ApiResponse = {
            success: false,
            message: "Failed to create a new event",
            statusCode: 401
        }
        return NextResponse.json(response);

    }
}


//get all event which is created by the user

export async function GET(request: NextRequest): Promise<NextResponse> {

    await dbConnect();
    try {
        //decode payload from the request
        const tokenId = decodeToken(request);

        // Check if the user is authenticated and verified
        if (!tokenId) {
            return NextResponse.json({
                success: false,
                message: "Invalid or expired token.",
                statusCode: 401
            });
        }

        //check user exist or not by user id
        let user = await UserModel.findById(tokenId)?.select("-password")

        //check user is authenticated or not
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found.",
                statusCode: 404
            });
        }

        //check user is verified or not
        if (!user.isVerified) {
            return NextResponse.json({
                success: false,
                message: "User is not verified.",
                statusCode: 401
            });
        }


        //retrive all user created event
















        //send successfull message to the user
        let response = {
            success: true,
            message: "event created successfully",
            statusCode: 201
        }
        return NextResponse.json(response);


    } catch (error) {
        const response: ApiResponse = {
            success: false,
            message: "Failed to retrive tournaments",
            statusCode: 401
        }

        return NextResponse.json(response);
    }
}

