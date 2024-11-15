import { ApiResponse } from "@/helpers/ApiResponse";
import { decodeToken } from "@/helpers/authHelpers";
import { dbConnect } from "@/lib/dbConnection";
import { EventModel } from "@/model/event.model";
import { UserModel } from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

//delete a tournament
export async function DELETE(request: NextRequest, { params }: { params: { eventId: string } }): Promise<NextResponse> {

    await dbConnect();

    try {
        // Access eventId from params
        const { eventId } = params;
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


        //check tournament exist or not by tournament id
        let event = await EventModel.findById(eventId)

        //if tournament not exist then return with a error message
        if (!event) {
            return NextResponse.json({
                success: false,
                message: "Event not found.",
                statusCode: 404
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

        //delete event TODO:  Also delete all games under this event
        const deleteEvent = await EventModel.findByIdAndDelete(eventId);

        //check success or not
        if (!deleteEvent) {
            return NextResponse.json({
                success: false,
                message: "Failed to delete Event.",
                statusCode: 401
            });
        }

        //send successfull message to the user
        let response = {
            success: true,
            message: "Event deleted successfully",
            statusCode: 201,
        }
        return NextResponse.json(response);


    } catch (error) {
        console.error("Error while deleting Event", error);
        const response: ApiResponse = {
            success: false,
            message: "Failed to delete Event",
            statusCode: 401
        }
        return NextResponse.json(response);

    }
}


//get tournament details
export async function GET(request: NextRequest, { params }: { params: { eventId: string } }): Promise<NextResponse> {

    await dbConnect();

    try {
        // Access eventId from params
        const { eventId } = params;

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


        //check tournament exist or not by tournament id
        let tournament = await EventModel.findById(eventId)

        //if tournament not exist then return with a error message
        if (!tournament) {
            return NextResponse.json({
                success: false,
                message: "Tournament not found.",
                statusCode: 404
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

        //send successfull message to the user
        let response = {
            success: true,
            message: "Tournament details fatch successfully successfully",
            statusCode: 201,
            data: tournament
        }
        return NextResponse.json(response);


    } catch (error) {
        console.error("Error while deleting tournament", error);
        const response: ApiResponse = {
            success: false,
            message: "Failed to fetch tournament details",
            statusCode: 401
        }
        return NextResponse.json(response);

    }
}



//update tournament details
export async function PUT(request: NextRequest, { params }: { params: { eventId: string } }): Promise<NextResponse> {
    await dbConnect();

    try {
        // Access eventId from params
        const { eventId } = params;

        // Extract JSON data from the request body
        const { name, startDate, endDate, location, description } = await request.json();


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

        //check tournament exist or not by tournament id
        let tournament = await EventModel.findById(eventId)

        //if tournament not exist then return with a error message
        if (!tournament) {
            return NextResponse.json({
                success: false,
                message: "Tournament not found.",
                statusCode: 404
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

        //update tournament
        tournament.name = name;
        tournament.startDate = startDate;
        tournament.endDate = endDate;
        tournament.description = description;
        tournament.location = location;

        const updatedTournament = await tournament.save();

        //check success or not
        if (!updatedTournament) {
            return NextResponse.json({
                success: false,
                message: "Failed to update tournament.",
                statusCode: 401
            });
        }

        //send successfull message to the user
        let response = {
            success: true,
            message: "Tournament updated successfully",
            statusCode: 201,
            data: updatedTournament
        }
        return NextResponse.json(response);


    } catch (error) {
        console.error("Error while updating tournament", error);
        const response: ApiResponse = {
            success: false,
            message: "Failed to update tournament",
            statusCode: 401
        }
        return NextResponse.json(response);

    }
}
