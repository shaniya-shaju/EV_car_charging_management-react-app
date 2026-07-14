
import axios from "axios";
import React, { useState } from "react";

const AddDetails = () => {

    const [input, changeInput] = useState({
        booking_id: "",
        owner_name: "",
        email: "",
        charging_date: "",
        phone: "",
        vehicle_registration_number: "",
        vehicle_brand: "",
        vehicle_model: "",
        battery_capacity: "",
        connector_type: "",
        time_slot: "",
        estimated_units: "",
        charging_bay_number: ""
    });

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        axios.post("http://localhost:3001/add-car", input)
            .then((response) => {
                alert(response.data.Status);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">EV Charging Booking</h2>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Booking ID</label>
                                <input type="text" className="form-control" name="booking_id" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Name</label>
                                <input type="text" className="form-control" name="owner_name" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Charging Date</label>
                                <input type="date" className="form-control" name="charging_date" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Registration Number</label>
                                <input type="text" className="form-control" name="vehicle_registration_number" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Brand</label>
                                <input type="text" className="form-control" name="vehicle_brand" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Model</label>
                                <input type="text" className="form-control" name="vehicle_model" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Battery Capacity (kWh)</label>
                                <input type="text" className="form-control" name="battery_capacity" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Connector Type</label>
                                <input type="text" className="form-control" name="connector_type" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Time Slot</label>
                                <input type="text" className="form-control" name="time_slot" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Estimated Units (kWh)</label>
                                <input type="text" className="form-control" name="estimated_units" onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Charging Bay Number</label>
                                <input type="text" className="form-control" name="charging_bay_number" onChange={inputHandler} />
                            </div>

                            <div className="col-12 text-center mt-3">
                                <button className="btn btn-success" onClick={readValues}>
                                    Book Charging Slot
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDetails;