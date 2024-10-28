
import { Player } from '@/types/playerTypes';
import mongoose, { Schema } from 'mongoose'

const playerSchema = new Schema<Player>({
    player: [
        {
            name: {
                type: String,
                required: [true, "Player Name is required"]
            },
            age: {
                type: Number,
                required: [true, "Player Age is required"]
            },
            adharid: {
                type: Number,
                required: [true, "Player Adhar ID is required"]
            }
        }
    ],

    address: {
        vill: {
            type: String,
            required: [true, "Please provide a correct address"]
        },
        pincode: {
            type: String,
            required: [true, "Please provide a correct address"]
        },
        state: {
            type: String,
            required: [true, "Please provide a correct address"]
        },
        country: {
            type: String,
            required: [true, "Please provide a correct address"]
        }
    },
    role: {
        type: String,
        required: [true, "Role is required"]
    },
    contactNumber: {
        type: Number,
        required: [true, "Contact Number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    image: {
        type: String,
        default: "/images/avatar.png" //TODO:Add default avater image 
    },
    tournamentId:{
        type:Schema.Types.ObjectId,
        ref:"Tournament"
    },
    eventId:{
        type:Schema.Types.ObjectId,
        ref:"Event"
    }

    //TODO: Foreign key

})

const PlayerModel = (mongoose.models.Player as mongoose.Model<Player>) || (mongoose.model<Player>("Player", playerSchema))

export { PlayerModel };