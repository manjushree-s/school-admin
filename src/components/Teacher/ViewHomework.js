import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllHw } from 'C:/Users/Manjushree S/school-admin/src/redux/HomeWorkSlice';

const ViewHomework = () => {

    const dispatch = useDispatch();
    const hwData = useSelector((state) => state.hw.hwState);
    const allhw = useSelector((state) => state.hw.allhwState);
    const [onehw, setOnehw] = useState({});

    const [hwData2, sethwData2] = useState({
        homeId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }
    });

    const handleOnehwData = (evt) => {
        setOnehw({
            ...onehw,
            [evt.target.name]: evt.target.value
        });
    }

    const handlehwChange = (evt) => {
        sethwData2({
            ...hwData2,
            [evt.target.name]: evt.target.value
        });
    }

    const submitGetAllhw = (evt) => {
        console.log("submitGetAllhw");
        axios.get('http://localhost:8082/school-admin/teacher/getHomework')
            .then((response) => {
                dispatch(getAllHw(response.data));
            }).catch(error => {
                console.log(error.message)
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All HomeWork</title>
            <h1>View Homework</h1>
            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Homework"
                        onClick={submitGetAllhw}
                    />
                </div>
                <div className="Container text-center">
                    <table class="table table-hover table-dark text-center">
                        <thead>
                            <tr>
                                <th scope="col">Teacher Id </th>
                                <th scope="col">HomeWork Id</th>
                                <th scope="col">Name</th>

                                {/* <p>teacherID homeID name</p> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {allhw.map((p, k) => {
                                    console.log(p);
                                    return (
                                            <div k={k}>

                                                <td scope="col text-center">{p.teacherId.teacherId}</td>
                                                <td scope="col text-center">{p.homeId}</td>
                                                <td scope="col text-center">{p.name}</td>

                                            </div>
                                    )
                                })}

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );


}

export default ViewHomework;