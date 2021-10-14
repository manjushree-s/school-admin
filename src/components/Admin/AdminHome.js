import React from 'react';
import { useHistory } from 'react-router';
import principal from 'C:/Users/Manjushree S/school-admin/src/images/Principal.jpg';
import complaint from 'C:/Users/Manjushree S/school-admin/src/images/complaint.jpg';
import course from 'C:/Users/Manjushree S/school-admin/src/images/course.jpg';
import notice from 'C:/Users/Manjushree S/school-admin/src/images/notice.jpg';
import student from 'C:/Users/Manjushree S/school-admin/src/images/Student.jpg';
import studentsm from 'C:/Users/Manjushree S/school-admin/src/images/studentsm.jpg';
import studentdetails from 'C:/Users/Manjushree S/school-admin/src/images/studentdetails.jpg';
import teacheradmin from 'C:/Users/Manjushree S/school-admin/src/images/teacher-admin.jpg';

const AdminHome = () => {

    const history = useHistory();

    const onSubmitAddAdmin = (event) => {

        history.push('/AddAdmin');

        event.preventDefault();
    }

    const onSubmitAddCourse = (event) => {

        history.push('/AddCourse');

        event.preventDefault();
    }

    const onSubmitAddNotice = (event) => {

        history.push('/AddNotice');

        event.preventDefault();
    }

    const onSubmitAddStudent = (event) => {

        history.push('/AddStudent');

        event.preventDefault();
    }

    const onSubmitAddTeacher = (event) => {

        history.push('/AddTeacher');

        event.preventDefault();
    }

    const onSubmitDeleteComplaint = (event) => {

        history.push('/DeleteComplaint');

        event.preventDefault();
    }

    const onSubmitDeleteNotice = (event) => {

        history.push('/DeleteNotice');

        event.preventDefault();
    }

    const onSubmitDeleteStudent = (event) => {

        history.push('/DeleteStudent');

        event.preventDefault();
    }

    const onSubmitDeleteTeacher = (event) => {

        history.push('/DeleteTeacher');

        event.preventDefault();
    }

    const onSubmitDeleteStudyMaterial = (event) => {

        history.push('/DeleteStudyMaterial');

        event.preventDefault();
    }

    const onSubmitGetAllAdmin = (event) => {

        history.push('/GetAllAdmin');

        event.preventDefault();
    }

    const onSubmitGetAllComplaint = (event) => {

        history.push('/GetAllComplaint');

        event.preventDefault();
    }

    const onSubmitGetAllCourse = (event) => {

        history.push('/GetAllCourse');

        event.preventDefault();
    }

    const onSubmitGetAllNotice = (event) => {

        history.push('/GetAllNotice');

        event.preventDefault();
    }

    const onSubmitGetAllStudyMaterial = (event) => {

        history.push('/GetAllStudyMaterial');

        event.preventDefault();
    }

    const onSubmitGetAllStudent = (event) => {

        history.push('/GetAllStudent');

        event.preventDefault();
    }

    const onSubmitGetAllTeacher = (event) => {

        history.push('/GetAllTeacher');

        event.preventDefault();
    }

    const onSubmitUpdateNotice = (event) => {

        history.push('/UpdateNotice');

        event.preventDefault();
    }

    const onSubmitUpdateStudent = (event) => {

        history.push('/UpdateNotice');

        event.preventDefault();
    }

    const onSubmitUpdateTeacher = (event) => {

        history.push('/UpdateTeacher');

        event.preventDefault();
    }

    const onSubmitGetComplaintById = (event) => {

        history.push('/GetComplaintById');

        event.preventDefault();
    }

    const onSubmitGetAdminById = (event) => {

        history.push('/GetAdminById');

        event.preventDefault();
    }

    const onSubmitViewComplaintById = (event) => {

        history.push('/GetComplaintById');

        event.preventDefault();
    }

    const onSubmitGetNoticeById = (event) => {

        history.push('/GetNoticeById');

        event.preventDefault();
    }

    const onSubmitGetStudentById = (event) => {

        history.push('/GetStudentById');

        event.preventDefault();
    }

    const onSubmitGetTeacherById = (event) => {

        history.push('/GetTeacherById');

        event.preventDefault();
    }

    const onSubmitGetStudyMaterialById = (event) => {

        history.push('/GetStudyMaterialById');

        event.preventDefault();
    }

    return (
        <div className="container text-center" >
            <title>Admin Home</title>
            <h1 className="display-4 text-center">Admin Home</h1>
            <h4 className="text-center">The key to successful leadership is influence, not authority..</h4>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={principal} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add Admin</h5>
                        <p class="card-text text-center">Leadership is an action, not a position.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddAdmin}>Go </a>
                    </div>
                </div>

                <div class="card" style={{ width: "15rem" }}>
                    <img src={course} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add Course</h5>
                        <p class="card-text text-center">Add the Course to set forth the path of Success.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddCourse}>Go </a>
                    </div>
                </div>

                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add Notice</h5>
                        <p class="card-text text-center">Add an Announcement or Notice for everyone to see the event taking place.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddNotice}>Go </a>
                    </div>
                </div>

            </div>

            <div class="card-columns">
            <div class="card" style={{ width: "15rem" }}>
                    <img src={studentdetails} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add Student</h5>
                        <p class="card-text text-center">Add the Student details so that they can access the best of education!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddStudent}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={teacheradmin} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add Teacher</h5>
                        <p class="card-text text-center">With Knowledge comes great power. Get as many powerful people as you can to teach the students!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddTeacher}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Complaint</h5>
                        <p class="card-text text-center">Delete the resolved complaint by the student.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteComplaint}>Go </a>
                    </div>
                </div>

            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Notice</h5>
                        <p class="card-text text-center">Delete outdated or misinformed notices.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteNotice}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentdetails} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Student</h5>
                        <p class="card-text text-center">Delete Students who've already found their way!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteStudent}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={teacheradmin} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Teacher</h5>
                        <p class="card-text text-center">Delete the Teachers who've gone to pursue more.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteTeacher}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={principal} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Admin by ID</h5>
                        <p class="card-text text-center">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAdminById}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={principal} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All the Admin</h5>
                        <p class="card-text text-center">Success is no accident from an Individual but a whole team of amazing, like-minded people with perseverance and determination.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllAdmin}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Complaint by ID</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitViewComplaintById}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All Complaints</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllComplaint}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={course} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All Course</h5>
                        <p class="card-text text-center">To acquire knowledge, one must study; but to acquire wisdom, one must observe.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllCourse}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All Notice</h5>
                        <p class="card-text text-center">We're Hoping to Have a Motto Announcement in About an Hour.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllNotice}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentdetails} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All Students</h5>
                        <p class="card-text text-center">Students-Fire today, Stars tomorrow.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllStudent}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentsm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All Study Material</h5>
                        <p class="card-text text-center">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllStudyMaterial}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={teacheradmin} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get All Teacher</h5>
                        <p class="card-text text-center">One child, one teacher, one book, one pen can change the world.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllTeacher}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get Notice by ID</h5>
                        <p class="card-text text-center">We're Hoping to Have a Motto Announcement in About an Hour.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetNoticeById}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={student} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get Student by ID</h5>
                        <p class="card-text text-center">Students-Fire today, Stars tomorrow.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetStudentById}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={teacheradmin} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get Teacher by ID</h5>
                        <p class="card-text text-center">One child, one teacher, one book, one pen can change the world.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetTeacherById}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentsm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get Study Material by ID</h5>
                        <p class="card-text text-center">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetStudyMaterialById}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update Notice</h5>
                        <p class="card-text text-center">We're Hoping to Have a Motto Announcement in About an Hour.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateNotice}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={teacheradmin} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update Teacher</h5>
                        <p class="card-text text-center">One child, one teacher, one book, one pen can change the world.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateTeacher}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={student} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update Student</h5>
                        <p class="card-text text-center">Students-Fire today, Stars tomorrow.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateStudent}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentsm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Study Material</h5>
                        <p class="card-text text-center">Delete the outdated Study Materials</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteStudyMaterial}>Go </a>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default AdminHome;