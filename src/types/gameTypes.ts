import { Document, Types } from "mongoose"

export interface Game extends Document {
    name: string;
    maximumPlayers: number;
    minimumPlayers: number;
    StartDate: Date;
    EndDate?: Date;
    contactNumber: number; //contact number
    contactEmail: string; //contact email
    prize?: [{ position?: string, value?: string | number }],//TODO: check carefully when you upload data 
    startingTime?: string;
    endingTime?: string;
    joiningFee?: number; // joining fee
    lastDateApplication: Date;
    place: string;
    description?: string;
    ageLimit: string;
    facility?: [string];
    rules?: [string]

    eventId: Types.ObjectId
    userId: Types.ObjectId
    //TODO: Foreign key
}