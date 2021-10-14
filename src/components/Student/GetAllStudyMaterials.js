import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllStudyMaterial = (props) => {

    const [studyList, setstudyList] = useState([]);
    const [study, setstudy] = useState({
        name: "",
        studyId: 0,
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }
    });
    const [onestudy, setOnestudy] = useState({
        name: "",
        studyId: 0,
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }


    });


    const handlespData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setstudy({
            ...study,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnespData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOnestudy({
            ...study,
            [evt.target.name]: evt.target.value
        });
    }




    const viewstudymaterials = (evt) => {
        axios.get('http://localhost:8082/school-admin/student/getAllStudyMaterial')
            .then((response) => {
                setstudyList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Materials is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All StudyMaterials</title>
            <h1>View StudyMaterials</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All StudyMaterials"
                        onClick={viewstudymaterials}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>Study Material ID</u></div>
                            <div className="col-sm"><u>Study Material Name</u></div>
                            <div className="col-sm"><u>Teacher ID</u></div>
                        </p>
                    </div>
                    {studyList.map((p, k) => {
                        console.log(p);
                        return (

                            <div k={k} className="row">
                                <div className="col-sm">{p.studyId}</div>
                                <div className="col-sm">{p.name}</div>
                                <div className="col-sm">{p.teacherId.teacherId}</div>

                            </div>

                        )
                    })}
                </div>
            </div>
        </div >
    );
}
export default GetAllStudyMaterial;