import { User } from '@/types/userTypes'
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    fullname: {
        type: String,
        required: [true, "Fullname is required"]

    },
    adharId: {
        type: Number,
        required: [true, "Adhar ID is required"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone number is required"]
    },
    address: {
        vill: {
            type: String,
        },
        pincode: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        }
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"]
    },
    verifyCodeExp: {
        type: Date,
        required: [true, "Verify code expiry is required"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    avatarUrl: {
        type: String,
        default: "/images/avatar.png" //TODO:Add default avater image 
    }

    //TODO: Foreign key

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", userSchema))

export { UserModel };