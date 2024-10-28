import { Document, Types } from "mongoose"

export interface Player extends Document {
    player: [{
        name: string,
        age: number,
        adharid: number
    }],
    address: {
        vill: string,
        pincode: number,
        state: string,
        country: string
    },
    role: string
    contactNumber: number;
    email: string;
    image: string;
    tournamentId: Types.ObjectId;
    eventId: Types.ObjectId;
    //TODO: remain to add foreign key


}