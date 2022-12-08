import mongoose from "mongoose";

export const dbConnection = async () => {
  const mongoCluster: string = process.env.MONGO_CLUSTER as string;

  const mongoUser: string = process.env.MONGO_USER as string;
  const mongoPassword: string = process.env.MONGO_PASSWORD as string;

  const mongoUri = mongoCluster.replace("<username>", mongoUser).replace("<password>", mongoPassword);

  const mongoDbName: string = process.env.MONGO_DB_NAME as string;
  await mongoose.connect(mongoUri, { dbName: mongoDbName });

  console.log("Database Connected!");
  console.log("Uri: " + mongoUri);
  console.log("DB Name: " + mongoDbName);
};
