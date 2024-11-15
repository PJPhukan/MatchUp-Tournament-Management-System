// update details of the specified

import { ApiResponse } from "@/helpers/ApiResponse";
import { decodeToken } from "@/helpers/authHelpers";
import { dbConnect } from "@/lib/dbConnection";
import { GameModel } from "@/model/game.model";
import { UserModel } from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

//update game
export async function PUT(request: NextRequest, { params }: { params: { tournamentId: string } }): Promise<NextResponse> {
    await dbConnect();

    try {
        //extract the tournament id from the url parameter
        const { tournamentId } = params;

        //extract the tournament details from the request parameters
        const { name, maximumPlayers, minimumPlayers, StartDate, EndDate, contactNumber, contactEmail, prize, startingTime, endingTime, joiningFee, lastDateApplication, place, description, ageLimit, facility, rules } = await request.json();


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
        let tournament = await GameModel.findById(tournamentId)

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

        //update the tournament details
        tournament.name = name;
        tournament.maximumPlayers = maximumPlayers;
        tournament.minimumPlayers = minimumPlayers;
        tournament.StartDate = StartDate;
        tournament.EndDate = EndDate;
        tournament.contactNumber = contactNumber;
        tournament.contactEmail = contactEmail;
        tournament.prize = prize;
        tournament.startingTime = startingTime;
        tournament.endingTime = endingTime;
        tournament.joiningFee = joiningFee;
        tournament.lastDateApplication = lastDateApplication;
        tournament.place = place;
        tournament.description = description;
        tournament.ageLimit = ageLimit;
        tournament.facility = facility;
        tournament.rules = rules;
        //save the updated tournament
        const updateResult = await tournament.save();

        if (!updateResult) {
            return NextResponse.json({
                success: false,
                message: "Failed to update game.",
                statusCode: 401
            });
        }

        //if successfully updated the tournament
        let response = {
            success: true,
            message: "Tournament updated successfully",
            statusCode: 201,
        }
        return NextResponse.json(response);


    } catch (error: any) {
        console.log("Errot occured while updating game :" + error.message)
        const response: ApiResponse = {
            success: false,
            message: error.message || "Error occurred while updating game",
            statusCode: 500,
        }

        return NextResponse.json(response);
    }

    return NextResponse.json({})
}



//delete game
export async function DELETE(request: NextRequest, { params }: { params: { tournamentId: string } }): Promise<NextResponse> {
    await dbConnect();

    try {
        //extract the tournament id from the url parameter
        const { tournamentId } = params;

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
        let tournament = await GameModel.findById(tournamentId)

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


        //save the updated tournament
        const updateResult = await GameModel.findByIdAndDelete(tournamentId);

        if (!updateResult) {
            return NextResponse.json({
                success: false,
                message: "Failed to delete game.",
                statusCode: 401
            });
        }

        //if successfully updated the tournament
        let response = {
            success: true,
            message: "Tournament deleted successfully",
            statusCode: 201,
        }
        return NextResponse.json(response);


    } catch (error: any) {
        console.log("Errot occured while deleting game :" + error.message)
        const response: ApiResponse = {
            success: false,
            message: error.message || "Error occurred while deleting game",
            statusCode: 500,
        }

        return NextResponse.json(response);
    }

    return NextResponse.json({})
}

//get tournament details
export async function GET(request: NextRequest, { params }: { params: { tournamentId: string } }): Promise<NextResponse> {
    await dbConnect();

    try {
        //extract the tournament id from the url parameter
        const { tournamentId } = params;

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
        let tournament = await GameModel.findById(tournamentId)

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


        //if successfully updated the tournament
        let response = {
            success: true,
            message: "Tournament fetch successfully",
            statusCode: 201,
            data: tournament,
        }
        return NextResponse.json(response);


    } catch (error: any) {
        console.log("Errot occured while fetching game :" + error.message)
        const response: ApiResponse = {
            success: false,
            message: error.message || "Error occurred while fetching game",
            statusCode: 500,
        }

        return NextResponse.json(response);
    }

    return NextResponse.json({})
}