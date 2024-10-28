import { Document, Types } from "mongoose"

export interface Event extends Document {
    name: string;
    thunbnail: string;
    location: {
        vill: string,
        pincode: number,
        state: string,
        country: string
    };
    prize: [{ position?: string, amount: string | number }],//TODO: check carefully when you upload data 
    Startdate: Date;
    Enddate: Date;
    time: string;
    description: string;
    minPalyer: number;
    maxPlayer: number;
    termsConditions: [string];
    contactNumber: number;
    contactEmail: string;
    tournamentId: Types.ObjectId
    //TODO: Foreign key
}