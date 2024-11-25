const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Database Connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    console.error("Database Connection Failed:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = dbConnect;
