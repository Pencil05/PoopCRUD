import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // โหลดค่าจาก .env

export const connectMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI; // ดึง URI จาก .env
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in .env file");
        }

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};
