import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill the full reservation form!", 400));
    }
    try {
        
        const newReservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date,
        });

        res.status(201).json({
            success: true,
            message: "Reservation form filled successfully!",
            data: newReservation,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};

export default sendReservation;
