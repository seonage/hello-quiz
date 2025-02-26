import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI.length) {
    throw new Error(
        "Please define the MONGO_URI environment variable (.env)"
    );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<any> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts: ConnectOptions = {
            bufferCommands: true,
            maxIdleTimeMS: 10000,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 20000,
            dbName: "hpquiz",
        };

        cached.promise = mongoose
            .connect(MONGO_URI, opts)
            .then((mongoose) => {
                console.log('DB connected')
                mongoose})
            .catch((err) => {
                throw new Error(String(err));
            });

    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        throw new Error(String(err));
    }

    return cached.conn;
}

export default dbConnect;