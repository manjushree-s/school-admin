import React from 'react';
import { useHistory } from 'react-router';
import principal from './images/Principal.jpg';
import teacher from './images/teacher-admin-home.jpg';
import student from './images/studentdetails.jpg';

const AdminHome = () => {

    const history = useHistory();

    const onSubmitAdminDetails = (event) => {

       
        history.push('/AdminDetails');
            
        event.preventDefault();
    }

    const onSubmitTeacherDetails = (event) => {

       
        history.push('/TeacherDetails');
            
        event.preventDefault();
    }

    const onSubmitStudentDetails = (event) => {

       
        history.push('/StudentDetails');
            
        event.preventDefault();
    }


    return (
        <div className="container text-center" >
            <title>Admin Home</title>
            <h1 className="display-4 text-center">Admin Home</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={principal} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Admin Details</h5>
                        <p class="card-text">Functionalities and authorities of admin inside...</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitAdminDetails}>Admin Details</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={teacher} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Teacher Details</h5>
                        <p class="card-text">Functionalities and authorities of admin regarding teachers here...</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitTeacherDetails}>Teacher Details</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={student} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Student Details</h5>
                        <p class="card-text">Functionalities and authorities of admin regarding student here...</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitStudentDetails}>Student Details</button>
                    </div>
                </div>
            </div>
            <p><br/><br/></p>
        </div>
    );
}

export default AdminHome;