import React from 'react';
import { useHistory } from 'react-router';
import studymaterial from 'C:/Users/Manjushree S/school-admin/src/images/studymaterial.jpg';
import homework from 'C:/Users/Manjushree S/school-admin/src/images/homework.jpg';

const TeacherHome = () => {

    const history = useHistory();

    const onSubmitStudyMaterial = (event) => {


        history.push('/AddStudyMaterial');

        event.preventDefault();
    }

    const onSubmitHomeWork = (event) => {


        history.push('/AddHomeWork');

        event.preventDefault();
    }

    const onSubmitGetHomeWork = (event) => {


        history.push('/GetHomeWork');

        event.preventDefault();
    }

    const onSubmitGetStudyMaterial = (event) => {


        history.push('/GetStudyMaterial');

        event.preventDefault();
    }

    const onSubmitDeleteHomework = (event) => {


        history.push('/DeleteHomeWork');

        event.preventDefault();
    }

    const onSubmitDeleteStudyMaterial = (event) => {


        history.push('/DeleteStudyMaterial');

        event.preventDefault();
    }

    const onSubmitUpdateStudyMaterial = (event) => {


        history.push('/UpdateStudyMaterial');

        event.preventDefault();
    }

    const onSubmitUpdateHomework = (event) => {


        history.push('/UpdateHomeWork');

        event.preventDefault();
    }

    return (
        <div className="container" >
            <title>Teacher Home</title>
            <h1 className="display-4 text-center">Teacher Home</h1>
            <h4 className="text-center">The Art of Teaching is the Art of Assisting DISCOVERY!</h4>
            <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studymaterial} class="card-img-top" alt="studymaterial" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add StudyMaterial</h5>
                        <p class="card-text text-center">Provide the Students the best of your Assistance. Give them the tools to build their future!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitStudyMaterial}>Go </a>
                    </div>
                </div>

                <div class="card" style={{ width: "15rem" }}>
                    <img src={studymaterial} class="card-img-top" alt="studymaterial" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get StudyMaterial</h5>
                        <p class="card-text text-center">Provide the Students the best of your Assistance. Give them the tools to build their future!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetStudyMaterial}>Go </a>
                    </div>
                </div>

                <div class="card" style={{ width: "15rem" }}>
                    <img src={studymaterial} class="card-img-top" alt="{\studymaterial" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete StudyMaterial</h5>
                        <p class="card-text text-center">Provide the Students the best of your Assistance. Give them the tools to build their future!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteStudyMaterial}>Go </a>
                    </div>
                </div>
                </div>

                <div class="card-columns">
                <div class="card" style={{ width: "15rem" }}>
                    <img src={studymaterial} class="card-img-top" alt="studymaterial" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update StudyMaterial</h5>
                        <p class="card-text text-center">Provide the Students the best of your Assistance. Give them the tools to build their future!</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateStudyMaterial}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={homework} class="card-img-top" alt="homework" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Add HomeWork</h5>
                        <p class="card-text text-center">Provide the Students the material on which their additional skill is reflected and their future is polished.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitHomeWork}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={homework} class="card-img-top" alt="homework" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Get HomeWork</h5>
                        <p class="card-text text-center">Provide the Students the material on which their additional skill is reflected and their future is polished.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitGetHomeWork}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
            <div class="card" style={{ width: "15rem" }}>
                    <img src={homework} class="card-img-top" alt="homework" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Delete Homework</h5>
                        <p class="card-text text-center">Provide the Students the material on which their additional skill is reflected and their future is polished.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitDeleteHomework}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "15rem" }}>
                    <img src={homework} class="card-img-top" alt="homework" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Update Homework</h5>
                        <p class="card-text text-center">Provide the Students the material on which their additional skill is reflected and their future is polished.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitUpdateHomework}>Go </a>
                    </div>

                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default TeacherHome;