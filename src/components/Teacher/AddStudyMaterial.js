import axios from 'axios';
import React, { useState, useEffect } from 'react';



const AddStudyMaterial = () => {


    const [sm, setsm] = useState({

        studyId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }

    });

    const handleSMData = level => (event) => {

        if (!level) {
            console.log("handleSMData", event.target.name, event.target.value);
            setsm({
                ...sm,
                [event.target.name]: event.target.value,

            });
        }
        else{
            setsm(
                {
                    ...sm,
                    [level]: {
                        ...sm[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }



    const submitAddSM = (event) => {

        console.log(sm);
        axios.post('http://localhost:8082/school-admin/teacher/addStudyMaterial', sm)
            .then((response) => {
                console.log(response);
                setsm(response.data);
                alert('StudyMaterial Added Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Add StudyMaterial</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Add StudyMaterial</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitAddSM} >
                        <div>
                            <p>teacher ID</p>
                            <input
                                type="number"
                                id="teacherId"
                                name="teacherId"
                                className="form-control mb-3"
                                value={sm.teacherId.teacherId}
                                placeholder="Enter Teacher Id"
                                onChange={handleSMData('teacherId')}
                            />
                            <p>StudyMaterial ID</p>
                            <input
                                type="number"
                                id="studyId"
                                name="studyId"
                                className="form-control mb-3"
                                value={sm.studyId}
                                placeholder="Enter study Id"
                                onChange={handleSMData()}
                            />


                            <p>name</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control mb-3"
                                value={sm.name}
                                placeholder="Enter StudyMaterial"
                                onChange={handleSMData()}

                            />
                            

                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add StudyMaterial"
                            />
                        </div>
                    </form>

                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Teacher ID</th>
                                    <th scope="col">Teacher Name</th>
                                    <th scope="col">StudyMaterial Id</th>
                                    <th scope="col">name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    <th scope="row">{sm.teacherId.teacherId}</th>
                                    <td>{sm.teacherId.teacherName}</td>
                                    <td>{sm.studyId}</td>
                                    <td>{sm.name}</td>



                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default AddStudyMaterial;