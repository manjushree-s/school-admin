import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetHomework = () => {

    //const [empList, setEmpList] = useState([]);
    const [hw, setHw] = useState({
        homeId: 0,
        name:'',
        teacherId:{
            teacherId:0,
            teacherName:'',
            teacherPassword:''
        }
        

    });

   

    const handleHwData = (evt) => {


        console.log("handleHwData", evt.target.name, evt.target.value);
        setHw({
            ...hw,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitHWId = (evt) => {
        console.log("submitGetHWById");
        axios.get(`http://localhost:8082/school-admin/teacher/getHomeworkById/${hw.homeId}`)
            .then((response) => {
                setHw(response.data);
            }).catch(error => {
                alert("Homework Id does not exist!");
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>View HomeWork Details</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >View HomeWork Details</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitHWId} >
                    <div>
                        <p>Home Id</p>
                        <input
                            type="number"
                            id="homeId"
                            name="homeId"
                            className="form-control mb-3"
                            value={hw.homeId}
                            placeholder="Enter Id"
                            onChange={handleHwData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="View Homework Details"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Home ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Teacher Id</th>
                            <th scope="col">Teacher name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{hw.homeId}</th>
                            <td>{hw.name}</td>
                            <td>{hw.teacherId.teacherId}</td>
                            <td>{hw.teacherId.teacherName}</td>
                            
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default GetHomework;