import { Game } from '@/types/gameTypes';
import mongoose, { Schema } from 'mongoose'

const gameSchema = new Schema<Game>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        unique: true
    },
    maximumPlayers: {
        type: Number,
        required: [true, "Minimum number of players is required"]
    },
    minimumPlayers: {
        type: Number,
        required: [true, "Maximum number of players is required"]
    },
    StartDate: {
        type: Date,
        required: [true, "Start date is required"]
    },
    EndDate: {
        type: Date,
    },
    contactNumber: {
        type: Number,
        required: [true, "Contact number is required"]
    },
    contactEmail: {
        type: String,
        required: [true, "Contact email is required"]
    },

    prize: [{
        position: {
            type: String
        },
        value: {
            type: String
        }
    }],
    startingTime: {
        type: String,
    },
    endingTime: {
        type: String,
    },
    joiningFee: {
        type: Number
    },
    lastDateApplication: {
        type: Date,
        required: [true, "Last date of application is required"]
    },
    place: {
        type: String,
        required: [true, "Please provide a correct address"]
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },
    ageLimit: {
        type: String,
        required: [true, "Age limit is required"]
    },
    facility: [{
        type: String
    }],
    rules: [{
        type: String
    }],


    eventId: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    userId: {
        type: Schema.Types.ObjectId, //who crate this tournament in this event 
        ref: "User"
    },
    //TODO: Foreign key

})

const GameModel = (mongoose.models.Game as mongoose.Model<Game>) || (mongoose.model<Game>("Game", gameSchema))

export { GameModel };