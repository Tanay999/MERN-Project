import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, "First Name should at least have 2 characters!"],
        maxLength: [30, "First Name should not exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [2, "Last Name should at least have 2 characters!"],
        maxLength: [30, "Last Name should not exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid e-mail!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must contain 10 digits!"],
        maxLength: [10, "Phone Number should not exceed 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
