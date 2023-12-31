import Booking from './../models/Bookings.js';
import Buses from './../models/Buses.js'

// POST API

const postApiBookings = async (req, res) => {
    const { name, age, charges, location } = req.body;

    const Booking = new Booking({
        name,
        age,
        charges,
        location
    });
    try {
        const savedBookings = await Booking.save();
        // 201 status code use for create data source
        return res.status(201).json({
            success: true,
            message: 'booking data saved',
            data: savedBookings
        });
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }

}

// GET all Bookings API

const getApiBooking = async (req, res) => {
    const allBookings = await Booking.find();

    return res.json({
        success: true,
        message: 'all bookings are fetched',
        data: allBookings
    })
}

//  GET one Booking by id API

const getApiBookingsId = async (req, res) => {
    const { id } = req.params;

    const updatedBooking = await Booking.findById(id);

    res.json({
        success: true,
        message: 'boking updated successfully',
        data: updatedBooking
    })
}

// PUT API for update Booking

const putApiBookings = async (req, res) => {
    const { id } = req.params;

    const { name, age, charges, location } = req.body;


    await Booking.updateOne({ _id: id }, {
        $set: {
            name: name,
            age: age,
            charges: charges,
            location: location
        }
    })

    const UpdatedBooking = await Bookings.findById(id);

    res.status(201).json({
        success: true,
        message: 'booking updated successfully',
        data: UpdatedBooking
    })



}

// PATCH API for update specific thing

const patchApiBookings = async (req, res) => {
    const { id } = req.params;

    const { charges, location } = req.body;

    await Booking.updateOne({ _id: id }, {
        $set: {
            charges: charges,
            location: location
        }
    }
    )

    const updateBooking = await Bookings.findById(id);
    res.status(201).json({
        success: true,
        message: 'bookind updated successfully',
        data: updateBooking

    })



}

// DELETE API for delete booking

const deleteApiBookings = async (req, res) => {
    const { id } = req.params;

    await Bookings.deleteOne ({ _id: id });

    res.json({
        success: true,
        message: 'booking deleted successfully'
    })
};

export { postApiBookings, getApiBooking, getApiBookingsId, putApiBookings, patchApiBookings, deleteApiBookings };