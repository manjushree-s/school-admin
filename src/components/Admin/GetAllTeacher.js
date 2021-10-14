import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllTeacher = (props) => {

    const [teacherList, setTeacherList] = useState([]);
    const [teacher, setteacher] = useState({
        teacherId: 0,
        teacherName: '',
        teacherPassword: '',
    });
    const [oneteacher, setOneteacher] = useState({
        teacherId: 0,
        teacherName: '',
        teacherPassword: '',
    });


    const handlenpData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setteacher({
            ...teacher,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnenpData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOneteacher({
            ...teacher,
            [evt.target.name]: evt.target.value
        });
    }


    const viewteacher = (evt) => {
        axios.get('http://localhost:8082/school-admin/admin/getAllTeacher')
            .then((response) => {
                setTeacherList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("No Teacher record present");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Teacher</title>
            <h1>View Teacher</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Teacher"
                        onClick={viewteacher}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>Teacher Id</u></div>
                            <div className="col-sm"><u>Teacher Name</u></div>
                            <div className="col-sm"><u>Teacher Password</u></div>
                        </p>
                    </div>
                    {teacherList.map((p, k) => {
                        console.log(p);
                        return (

                            <div k={k} className="row">

                                <div className="col-sm">{p.teacherId}</div>
                                <div className="col-sm">{p.teacherName}</div>
                                <div className="col-sm">{p.teacherPassword}</div>

                            </div>

                        )
                    })}
                </div >

            </div >
        </div >
    );
}
export default GetAllTeacher;