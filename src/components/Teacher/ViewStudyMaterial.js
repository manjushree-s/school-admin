import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {  getAllSm} from '../../redux/StudyMaterialSlice';
import { getAllSm } from '../../redux/StudyMaterialSlice';

const ViewStudyMaterial = () => {

    const dispatch = useDispatch();
    const allsm = useSelector((state) => state.sm.allsmState);
    


    const submitGetAllsm = (evt) => {
        console.log("submitGetAllsm");
        axios.get('http://localhost:8082/school-admin/teacher/teacher/getAllStudyMaterial')
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
                        <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>TeacherId</u>
                            </div>
                            <div className="col-sm"><u>StudyMaterial Id</u></div>
                            <div className="col-sm"><u>Name</u></div>
 
                        </p>


 
                    </div>
                    {allsm.map((e, k) => {
                        console.log(e);
                        return (
 
                            <div k={k} className="row">
 
                                <div className="col-sm">
                                    {e.teacherId.teacherId}
                                </div>
 
                                <div className="col-sm">
                                    {e.studyId}
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

export default ViewStudyMaterial;