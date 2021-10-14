import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateTeacher = () => {


    const [teacher, setTeacher] = useState({

        teacherId: 0,
        teacherName: '',
        teacherPassword: ''
    });



    const handleTeacherData = (evt) => {


        console.log("handleTeacherData", evt.target.name, evt.target.value);
        setTeacher({
            ...teacher,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitUpdateTeacher = (evt) => {

        console.log(teacher);
        axios.put('http://localhost:8082/school-admin/admin/updateTeacher', teacher)
            .then((response) => {
                console.log(response);
                setTeacher(response.data);
                alert(`Teacher updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Update Teacher</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Update Teacher</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitUpdateTeacher} >
                    <div>
                        <p>Teacher Id</p>
                        <input
                            type="number"
                            id="teacherId"
                            name="teacherId"
                            className="form-control mb-3"
                            value={teacher.teacherId}
                            placeholder="Enter Id"
                            onChange={handleTeacherData}
                        />
                        <p>Teacher Name</p>
                        <input
                            type="text"
                            id="teacherName"
                            name="teacherName"
                            className="form-control mb-3"
                            pattern="[A-Za-z ]+" 
                            title="Please enter only characters!"
                            minLength="3"
                            maxLength="20"
                            value={teacher.teacherName}
                            placeholder="Enter Name"
                            onChange={handleTeacherData}
                        />
                        <p>Passsword</p>
                        <input
                            type="password"
                            id="teacherPassword"
                            name="teacherPassword"
                            className="form-control mb-3"
                            value={teacher.teacherPassword}
                            placeholder="Enter Password"
                            onChange={handleTeacherData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Teacher"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default UpdateTeacher;