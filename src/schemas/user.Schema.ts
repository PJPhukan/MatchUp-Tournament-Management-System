import { z } from 'zod'

//sign up schema
export const SignUpSchema = z.object({
    username: z.string()
        .min(3, "Username must be atleast 2 characters")
        .max(15, "Username must be no more than 15 character")
        .regex(/^[a-zA-Z0-9]+$/, "Username can only contain alphanumeric characters")
    ,
    fullname: z.string()
        .min(3, "Fullname must be atleast 3 characters")
        .max(50, "Fullname must be no more than 50 characters")
    ,
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please Enter a valid email"),

    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters"
        })
        .regex(/[a-z]+/, { message: "Password should be contain atleast one lower case" })
        .regex(/[A-Z]+/, { message: "Password should be contain atleast one upper case" })
        .regex(/[0-9]+/, { message: "Password should be contain atleast one number" })
        .regex(/[^a-zA-Z0-9]+/, { message: "Password should be contain atleast one speacial character" })
    ,
    adharId: z.number()
        .min(12, "Adhar ID must be 12 digits")
        .max(12, "Adhar ID must be 12 digits")
    ,
    phoneNumber: z.number()
        .min(10, "Phone number must be 10 digits")
        .max(10, "Phone number must be 10 digits"),
    address: z.object({
        vill: z.string().min(3, "Village name must be atleast 3 characters").max(50, "Village name must be no more than 50 characters"),
        pincode: z.string().min(6, "Pincode must be 6 digits").max(6, "Pincode must be 6 digits"),
        state: z.string().min(3, "State name must be atleast 3 character")
            .max(50, "State name must be no more than 50 characters"),
        country: z.string().min(3, "Country name must be atleast 3 characters").max(50, "Country name must be no more than 50 characters"),
    }),

})

//sign in schema
export const SignInSchema = z.object({
    email: z
        .string()
        .email({ message: "Invalid email address" }),

    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters"
        })
        .regex(/[a-z]+/, { message: "Password should be contain atleast one lower case" })
        .regex(/[A-Z]+/, { message: "Password should be contain atleast one upper case" })
        .regex(/[0-9]+/, { message: "Password should be contain atleast one number" })
        .regex(/[^a-zA-Z0-9]+/, { message: "Password should be contain atleast one speacial character" })
    ,
})


//verify code 
export const verifySchema = z.object({
    code: z.string()
        .min(6, "Verification code must be 6 digits")
        .max(6, "Verification code must be 6 digits")
})