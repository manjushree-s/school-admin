import React from 'react';
import { useHistory } from 'react-router';
import admin_icon from '../images/admin_icon.jpg';
import teacher from '../images/teacher.jpg';
import Student from '../images/Student.jpg';

const Login = () => {

    const history = useHistory();


    const onSubmitAdmin = (event) => {

        history.push('/AdminLogin');

        event.preventDefault();
    }

    const onSubmitTeacher = (event) => {

        history.push('/TeacherLogin');

        event.preventDefault();
    }

    const onSubmitStudent = (event) => {

        history.push('/StudentLogin');

        event.preventDefault();
    }

    return (
        <div className="container" >
            <title>Admin Home</title>
            <h1 className="display-4 text-primary">Admin Home</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={admin_icon} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Admin Login</h5>
                        <p class="card-text"></p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitAdmin}>Login</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={teacher} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Teacher Login</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitTeacher}>Login</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={Student} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Student Login</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitStudent}>Login</button>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default Login;
