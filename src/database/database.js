import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connection to the database...");
  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.8tkinvk.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
