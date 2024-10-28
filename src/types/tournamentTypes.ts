import { Document, Types } from "mongoose"

export interface Tournament extends Document {
    name: string;
    thumbnail: string
    startDate: Date;
    endDate: Date;
    location: {
        vill: string,
        pincode: number,
        state: string,
        country: string
    };
    description: string;
    apiKey: string;
    apiKeyPassKey: string;
    userId: Types.ObjectId
    //TODO: add foreign key
}