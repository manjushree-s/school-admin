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
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>

                                <th scope="col">Teacher ID</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">Teacher Password</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {teacherList.map((p, k) => {
                                    console.log(p);
                                    return (

                                        <div k={k}>
                                            
                                            <td>{p.teacherId}</td>
                                            <td>{p.teacherName}</td>
                                            <td>{p.teacherPassword}</td>

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
export default GetAllTeacher;