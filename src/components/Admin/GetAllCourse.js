import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllCourse = (props) => {

    const [courseList, setcourseList] = useState([]);
    const [course, setcourse] = useState({
        courseId: 0,
        name: "",
        numhrs: "",
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }

    });
    const [onecourse, setOnecourse] = useState({
        courseId: 0,
        name: "",
        numhrs: "",
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }
    });


    const handlecpData = (evt) => {
        console.log("handlecpData", evt.target.name, evt.target.value);
        setcourse({
            ...course,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnecpData = (evt) => {
        console.log("handleOnecpData", evt.target.name, evt.target.value);
        setOnecourse({
            ...course,
            [evt.target.name]: evt.target.value
        });
    }




    const viewcourse = (evt) => {
        axios.get('http://localhost:8082/school-admin/admin/getAllCourse')
            .then((response) => {
                setcourseList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Course List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Course</title>
            <h1>View Course</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Complaints"
                        onClick={viewcourse}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>courseId</u></div>
                            <div className="col-sm"><u>teacherId</u></div>
                            <div className="col-sm"><u>Course-name</u></div>
                            <div className="col-sm"><u>Total No.of Hours</u></div>

                        </p>
                    </div>
                    {courseList.map((p, k) => {
                        console.log(p);
                        return (

                            <div k={k} className="row">
                                <div className="col-sm">{p.courseId}</div>
                                <div className="col-sm">{p.teacherId.teacherId}</div>
                                <div className="col-sm">{p.name}</div>
                                <div className="col-sm">{p.numhrs}</div>

                            </div>

                        )
                    })}

                </div>

            </div>
        </div >
    );
}
export default GetAllCourse;