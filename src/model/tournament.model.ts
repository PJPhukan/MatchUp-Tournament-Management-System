
import { Tournament } from '@/types/tournamentTypes';
import mongoose, { Schema } from 'mongoose'

const TournamentSchema = new Schema<Tournament>({
    name: {
        type: String,
        required: [true, "Tournament name is required"],
        trim: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: [true, "Please provide a valid poster"],

    },
    startDate: {
        type: Date,
        required: [true, "Please provide a valid start date"],
    },
    endDate: {
        type: Date,
        required: [true, "Please provide a valid end date"],
        validate: {
            validator: (value: Date) => value >= new Date(),
            message: "End date must be later than start date"
        }
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
    description: {
        type: String,
        required: [true, "Please provide a description for the tournament"],
    },
    apiKey: {
        type: String,
    },
    apiKeyPassKey: {
        type: String,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }



    //TODO: Foreign key

})

const TournamentModel = (mongoose.models.Tournament as mongoose.Model<Tournament>) || (mongoose.model<Tournament>("Tournament", TournamentSchema))

export { TournamentModel };