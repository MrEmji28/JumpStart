import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDB = async () => {
    const connectionUrl =
        "mongodb+srv://marcgenecrisolo:123456782023@cluster0.jch2bau.mongodb.net/";

    mongoose
        .connect(connectionUrl, configOptions)
        .then(() => console.log("JumpStart Online Retail Database connected successfully!"))
        .catch((err) =>
            console.log(`Getting Error from DB connection ${err.message}`)
        );
};

export default connectToDB;