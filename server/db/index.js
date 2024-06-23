import mongoose from "mongoose";

export default async (useNitroApp) => {
  mongoose
    .connect(process.env.MONGO_CONN)
    .then(() => console.log("mongoDB connected!!"))
    .catch((e) => console.log(e));
};
