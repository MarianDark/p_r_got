import { connect } from "mongoose";

const connectMongo = async () => {
  try {
    // eslint-disable-next-line no-undef
    const conn = await connect(process.env.MONGO_URI);
    console.log("INFO: Connetion successful to:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};

export default { connectMongo };
