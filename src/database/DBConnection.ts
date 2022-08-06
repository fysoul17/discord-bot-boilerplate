import mongoose from "mongoose";

export const dbConnection = async () => {
  const mongoCluster: string = process.env.MONGO_CLUSTER as string;

  let mongoUser: string = process.env.MONGO_USER as string;
  let mongoPassword: string = process.env.MONGO_PASSWORD as string;

  const mongoUri = mongoCluster.replace("<username>", mongoUser).replace("<password>", mongoPassword);

  await mongoose.connect(mongoUri);

  console.log("Database Connected!");
};
