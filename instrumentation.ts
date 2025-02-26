import dbConnect from "./middleware/db-connect";

export async function register() {
    await dbConnect();
}