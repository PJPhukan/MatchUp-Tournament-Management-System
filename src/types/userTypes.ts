//TODO: add essential field
import { Document } from "mongoose"

export interface User extends Document {
    username: string;
    fullname: string;
    email: string;
    password: string;
    adharId: number;
    phoneNumber: number;
    address: {
        vill: string,
        pincode: number,
        state: string,
        country: string
    }
    verifyCode: string;
    verifyCodeExp: Date;
    isVerified: boolean;
    avatarUrl: string;

}