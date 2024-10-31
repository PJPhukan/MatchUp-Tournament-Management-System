import { Game } from '@/types/gameTypes';
import mongoose, { Schema } from 'mongoose'

const gameSchema = new Schema<Game>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        unique: true
    },
    thunbnail: {
        type: String,
        required: [true, "Thunbnail is required"]
    },
    location: {
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
    prize: [{
        position: {
            type: String,
            required: [true, "Position is required"]
        },
        amount: {
            type: String,
            required: [true, "Amount is required"]
        }
    }],
    Startdate: {
        type: Date,
        required: [true, "Start date is required"]
    },
    Enddate: {
        type: Date,
        required: [true, "End date is required"]
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    minPalyer: {
        type: Number,
        required: [true, "Minimum number of players is required"]
    },
    maxPlayer: {
        type: Number,
        required: [true, "Maximum number of players is required"]
    },
    termsConditions: [{
        type: String,
        required: [true, "Please agree to the terms and conditions"]
    }],
    contactNumber: {
        type: Number,
        required: [true, "Contact number is required"]
    },
    contactEmail: {
        type: String,
        required: [true, "Contact email is required"]
    }
    ,
    tournamentId: {
        type: Schema.Types.ObjectId,
        ref: "Tournament"
    }

    //TODO: Foreign key

})

const GameModel = (mongoose.models.Game as mongoose.Model<Game>) || (mongoose.model<Game>("Game", gameSchema))

export { GameModel };