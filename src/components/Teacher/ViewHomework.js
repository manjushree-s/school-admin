import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllHw } from '../../redux/HomeWorkSlice';

const ViewHomeWork = () => {

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
                                value="Get All HomeWork"
                                onClick={submitGetAllhw}
                            />
                        </div>
                        <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>TeacherId</u>
                            </div>
                            <div className="col-sm"><u>Homework Id</u></div>
                            <div className="col-sm"><u>Name</u></div>
 
                        </p>


 
                    </div>
                    {allhw.map((e, k) => {
                        console.log(e);
                        return (
 
                            <div k={k} className="row">
 
                                <div className="col-sm">
                                    {e.teacherId.teacherId}
                                </div>
 
                                <div className="col-sm">
                                    {e.homeId}
                                </div>

                                <div className="col-sm">
                                    {e.name}
                                </div>
 
                            </div>
 
                        )
                    })}
                    
                </div>
        
                    </div>
                </div >
            );

   
}

export default ViewHomeWork;