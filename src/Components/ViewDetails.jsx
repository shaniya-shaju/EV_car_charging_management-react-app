import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";


const ViewDetails = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:3001/view-car")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">

                        <h2 className="text-center mb-4">
                            EV Charging Booking Details
                        </h2>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Owner Name</th>
                                        <th>Email</th>
                                        <th>Charging Date</th>
                                        <th>Phone</th>
                                        <th>Vehicle Reg. No.</th>
                                        <th>Vehicle Brand</th>
                                        <th>Vehicle Model</th>
                                        <th>Battery Capacity (kWh)</th>
                                        <th>Connector Type</th>
                                        <th>Time Slot</th>
                                        <th>Estimated Units</th>
                                        <th>Charging Bay No.</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((value) => (
                                        <tr key={value._id}>
                                            <td>{value.booking_id}</td>
                                            <td>{value.owner_name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.charging_date}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.vehicle_registration_number}</td>
                                            <td>{value.vehicle_brand}</td>
                                            <td>{value.vehicle_model}</td>
                                            <td>{value.battery_capacity}</td>
                                            <td>{value.connector_type}</td>
                                            <td>{value.time_slot}</td>
                                            <td>{value.estimated_units}</td>
                                            <td>{value.charging_bay_number}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;