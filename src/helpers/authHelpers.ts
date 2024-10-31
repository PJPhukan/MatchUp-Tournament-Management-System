import bcrypt from "bcryptjs"
import { ComparePasswordType } from "@/types/authHelperTypes"


export const comparePassword = async ({ password, hashedPassword }: ComparePasswordType): Promise<Boolean> => {
    const result = await bcrypt.compareSync(password, hashedPassword);  // Returns true if the password matches the hashed password
    return result;
}