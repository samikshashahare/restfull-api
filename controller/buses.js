import Buses from './../models/Buses.js';

// POST API for Create bus Information (versioning)
const postApiBuses = async (req, res) => {

    const { busName, busNum, seatNo, totalSeats, location } = req.body;

    const SeatBooking = new Buses({

        busName,
        busNum,
        seatNo,
        totalSeats,
        location
    });

    try {
        const savedBooking = await SeatBooking.save();
        return res.json({
            success: true,
            message: 'seat booked successfully',
            data: savedBooking
        });
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        });

    }
}

const postApiSeatBook = async (req, res) => {

    const { busName, busNum, seatNo, Seats, location } = req.body;

    const SeatBooking = new Buses({

        busName,
        busNum,
        seatNo,
        Seats,
        location
    });

    try {
        const savedBooking = await SeatBooking.save();
        return res.json({
            success: true,
            message: 'seat booked successfully',
            data: savedBooking
        });
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        });

    }
}

export {postApiBuses,postApiSeatBook};

