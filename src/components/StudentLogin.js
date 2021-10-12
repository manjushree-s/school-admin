import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const StudentLogin = () => {

    const history = useHistory();


    const [oneEmp, setOneEmp] = useState({
        studentId: 0,
        // employeeName: '',
        studentPassword: ''
    });

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...oneEmp,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8082/school-admin/student/loginStudent', oneEmp)
            .then(async (response) => {
                await history.push('/StudentHome');
            }).catch(error => {
                console.log(error.message);
                alert('Student Id does not exist!');
            });
        evt.preventDefault();
    }

    return (
        <div className="container">
            <title>Student Login</title>
            <div class="card" style={{ width: "18rem" }} className="container">
                <div class="card-body">
                <form>
                    <h3>Student Login</h3>

                    <div className="form-group">
                        <label>Student Id</label>
                        <input type="number"
                            id="studentId"
                            name="studentId"
                            className="form-control mb-3"
                            value={oneEmp.studentId}
                            onChange={handleOneEmpData}
                            placeholder="Enter Id" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            id="studentPassword"
                            name="studentPassword"
                            className="form-control mb-3"
                            value={oneEmp.studentPassword}
                            onChange={handleOneEmpData}
                            placeholder="Enter Password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>Submit</button>


                </form>
            </div>
        </div>
        </div >
    );
}

export default StudentLogin;