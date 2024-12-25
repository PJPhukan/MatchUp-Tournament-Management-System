
import { Event } from '@/types/EventTypes';
import mongoose, { Schema } from 'mongoose'

const EventSchema = new Schema<Event>({
    name: {
        type: String,
        required: [true, "Event name is required"],
        unique: true
    },
    poster: {
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
            type: Number,
            required: [true, "Please provide a correct address"]
        },
        state: {
            type: String,
            required: [true, "Please provide a correct address"]
        },
        district: {
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
        default: " "
    },
    apiKeyPassKey: {
        type: String,
        password: " "
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }



    //TODO: Foreign key

})

const EventModel = (mongoose.models.Event as mongoose.Model<Event>) || (mongoose.model<Event>("Event", EventSchema))

export { EventModel };