import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllStudent = (props) => {

    const [studentList, setStudentList] = useState([]);
    const [student, setstudent] = useState({
        studentId: 0,
        studentName: '',
        studentPassword: '',
    });
    const [onestudent, setOnestudent] = useState({
        studentId: 0,
        studentName: '',
        studentPassword: '',
    });


    const handlenpData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setstudent({
            ...student,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnenpData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOnestudent({
            ...student,
            [evt.target.name]: evt.target.value
        });
    }


    const viewstudent = (evt) => {
        axios.get('http://localhost:8082/school-admin/admin/getAllStudent')
            .then((response) => {
                setStudentList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("No Student record present");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Student</title>
            <h1>View Student</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Student"
                        onClick={viewstudent}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>Student ID</u></div>
                            <div className="col-sm"><u>Student Name</u></div>
                            <div className="col-sm"><u>Student Password</u></div>
                        </p>
                    </div>
                    {studentList.map((p, k) => {
                        console.log(p);
                        return (

                            <div k={k} className="row">

                                <div className="col-sm">{p.studentId}</div>
                                <div className="col-sm">{p.studentName}</div>
                                <div className="col-sm">{p.studentPassword}</div>

                            </div>

                        )
                    })}
       
                </div>

            </div>
        </div >
    );
}
export default GetAllStudent;