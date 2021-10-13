import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  getAllSm} from 'C:/Users/Manjushree S/school-admin/src/redux/StudyMaterialSlice';
const ViewStudyMaterial = () => {

    const dispatch = useDispatch();
    const allsm = useSelector((state) => state.sm.allsmState);
    


    const submitGetAllsm = (evt) => {
        console.log("submitGetAllsm");
        axios.get('http://localhost:8082/school-admin/teacher/getAllStudyMaterial')
            .then((response) => {
                dispatch(getAllSm(response.data));
            }).catch(error => {
                console.log(error.message)
            });
        evt.preventDefault();
    }

    return (
                <div className="container" >
                    <title>Get All StudyMaterial</title>
                    <h1>View StudyMaterial</h1>
                    <div>
                        <div>
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Get All StudyMaterial"
                                onClick={submitGetAllsm}
                            />
                        </div>
                        <div className="Container text-left">
                            <table class="table table-hover table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Teacher Id </th>
        
                                        <th scope="col">HomeWork Id</th>
                                        <th scope="col">Name</th>
                                        
                                        {/* <p>teacherID studyID name</p> */}

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {allsm.map((p, k) => {
                                            console.log(p);
                                            return (
        
                                                <div k={k}>
        
                                                    <td >{p.teacherId.teacherId}</td>
                                                    <td>{p.studyId}</td>
                                                    <td>{p.name}</td>
                                                    
        
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

export default ViewStudyMaterial;