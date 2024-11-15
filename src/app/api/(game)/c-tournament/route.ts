// create game ( POST request)

import { ApiResponse } from "@/helpers/ApiResponse";
import { decodeToken } from "@/helpers/authHelpers";
import { dbConnect } from "@/lib/dbConnection";
import { GameModel } from "@/model/game.model";
import { UserModel } from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    await dbConnect()
    try {

        // Extract JSON data from the request body
        const { name, maximumPlayers, minimumPlayers, StartDate, EndDate, contactNumber, contactEmail, prize, startingTime, endingTime, joiningFee, lastDateApplication, place, description, ageLimit, facility, rules, eventId } = await request.json();


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

        // Create a new tournament
        const newTournament = await GameModel.create({
            name,
            maximumPlayers,
            minimumPlayers,
            StartDate,
            EndDate: EndDate || null,
            contactNumber,
            contactEmail,
            prize: prize || null,
            startingTime: startingTime || null,
            endingTime: endingTime || null,
            joiningFee: joiningFee || null,
            lastDateApplication,
            place,
            description: description || null,
            ageLimit,
            facility: facility || null,
            rules: rules || null,
            eventId: eventId || null,
            user: user._id
        });

        //check it successfully created or not
        if (!newTournament) {
            return NextResponse.json({
                success: false,
                message: "Failed to create a new game",
                statusCode: 401
            });
        }

        // return the newly created game
        return NextResponse.json({
            success: true,
            message: "New game created successfully",
            statusCode: 201,
            data: newTournament
        });


    } catch (error: any) {
        console.log("Errot occured while creating a new game :" + error.message)
        const response: ApiResponse = {
            success: false,
            message: error.message || "Error occurred while creating new tournament",
            statusCode: 500,
        }

        return NextResponse.json(response);

    }
}