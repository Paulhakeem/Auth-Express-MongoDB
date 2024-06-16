import mongoose from "mongoose";

export default async (useNitroApp) => {
  const config = useAppConfig();

  mongoose
    .connect("mongodb+srv://paulnyamawi18:f3Chc7WKbHUlCe9j@authentication.rtglsgh.mongodb.net/")
    .then(() => console.log("mongoDB connected!!"))
    .catch((e) => console.log(e));
};
