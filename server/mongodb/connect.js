import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  // The 'strictQuery' option is used to enable strict query mode. 
  // In strict mode, Mongoose only allows using query operators 
  // ($eq, $ne, etc.) on fields that are defined in the schema. 
  // This can help prevent accidental or unintended queries on undefined fields.

  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
};

export default connectDB;