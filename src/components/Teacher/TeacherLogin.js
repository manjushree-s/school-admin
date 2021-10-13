import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TeacherLogin = () => {

    const history = useHistory();


    const [oneEmp, setOneEmp] = useState({
        teacherId: 0,
        // employeeName: '',
        teacherPassword: ''
    });

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...oneEmp,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8082/school-admin/teacher/loginTeacher', oneEmp)
            .then(async (response) => {
                await history.push('/TeacherHome');
            }).catch(error => {
                console.log(error.message);
                alert('Teacher Id does not exist!');
            });
        evt.preventDefault();
    }

    return (
        <div className="container">
            <title>Teacher Login</title>
            <div class="card" style={{ width: "18rem" }} className="container">
                <div class="card-body">
                <form>
                    <h3>Teacher Login</h3>

                    <div className="form-group">
                        <label>Teacher Id</label>
                        <input type="number"
                            id="teacherId"
                            name="teacherId"
                            className="form-control mb-3"
                            value={oneEmp.teacherId}
                            onChange={handleOneEmpData}
                            placeholder="Enter Id" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            id="teacherPassword"
                            name="teacherPassword"
                            className="form-control mb-3"
                            value={oneEmp.teacherPassword}
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

export default TeacherLogin;