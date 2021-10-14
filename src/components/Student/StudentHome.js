import React from 'react';
import { useHistory } from 'react-router';
import complaint from 'C:/Users/Manjushree S/school-admin/src/images/complaint.jpg';
import course from 'C:/Users/Manjushree S/school-admin/src/images/course.jpg';
import notice from 'C:/Users/Manjushree S/school-admin/src/images/notice.jpg';
import studentsm from 'C:/Users/Manjushree S/school-admin/src/images/studentsm.jpg';
import studenthm from 'C:/Users/Manjushree S/school-admin/src/images/studenthm.jpg';

const StudentHome = () => {

    const history = useHistory();

    const onSubmitComplaint = (event) => {

        history.push('/AddComplaint');

        event.preventDefault();
    }

    const onSubmitDeleteComplaint = (event) => {

        history.push('/DeleteComplaint');

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

    const onSubmitUpdateHomework = (event) => {

        history.push('/UpdateHomework');

        event.preventDefault();
    }

    const onSubmitGetComplaintById = (event) => {

        history.push('/GetComplaintById');

        event.preventDefault();
    }

    const onSubmitGetCourseById = (event) => {

        history.push('/GetCourseById');

        event.preventDefault();
    }

    const onSubmitGetHomeworkById = (event) => {

        history.push('/GetHomeworkById');

        event.preventDefault();
    }

    const onSubmitGetNoticeById = (event) => {

        history.push('/GetNoticeById');

        event.preventDefault();
    }

    const onSubmitGetStudyMaterialById = (event) => {

        history.push('/GetStudyMaterialById');

        event.preventDefault();
    }

    const onSubmitUpdateComplaint = (event) => {

        history.push('/UpdateComplaint');

        event.preventDefault();
    }

    return (
        <div className="container text-center" >
            <title>Student Home</title>
            <h1 className="display-4 text-center">Student Home</h1>
            <h4 className="text-center">Teachers can open the door, but you must enter it yourself.</h4>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add Complaint</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitComplaint}>Go </a>
                    </div>
                </div>

                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get Complaints</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllComplaint}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Complaint by ID</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetComplaintById}>Go </a>
                    </div>
                </div>

            </div>

            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Complaint</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteComplaint}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={complaint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update Complaint</h5>
                        <p class="card-text text-center">We all need people who will give us feedback. That’s how we improve.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateComplaint}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={course} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">All Courses</h5>
                        <p class="card-text text-center">To acquire knowledge, one must study; but to acquire wisdom, one must observe.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllCourse}>Go </a>
                    </div>
                </div>

            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={course} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Course by ID</h5>
                        <p class="card-text text-center">To acquire knowledge, one must study; but to acquire wisdom, one must observe.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetCourseById}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Notices</h5>
                        <p class="card-text text-center">We're Hoping to Have a Motto Announcement in About an Hour.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllNotice}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={notice} class="card-img-top" alt="homework" />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Notice by ID</h5>
                        <p class="card-text text-center">We're Hoping to Have a Motto Announcement in About an Hour.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetNoticeById}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentsm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Study Materials</h5>
                        <p class="card-text text-center">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetAllStudyMaterial}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studentsm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View Study Material by ID</h5>
                        <p class="card-text text-center">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetStudyMaterialById}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studenthm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">View HomeWork by ID</h5>
                        <p class="card-text text-center">Nothing is more powerful for your future than being a gatherer of good ideas and information. That's called doing your homework.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetHomeworkById}>Go </a>
                    </div>
                </div>
                </div>
                <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studenthm} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update HomeWork</h5>
                        <p class="card-text text-center">Nothing is more powerful for your future than being a gatherer of good ideas and information. That's called doing your homework.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateHomework}>Go </a>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default StudentHome;