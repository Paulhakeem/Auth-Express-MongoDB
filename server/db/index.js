import mongoose from "mongoose";

export default async (useNitroApp) => {
  const config = useAppConfig();

  mongoose
    .connect(config.MONGO_CONN)
    .then(() => console.log("mongoDB connected!!"))
    .catch((e) => console.log(e));
};
