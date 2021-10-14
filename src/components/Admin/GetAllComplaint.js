import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllComplaint = (props) => {

    const [complaintList, setComplaintList] = useState([]);
    const [complaint, setComplaint] = useState({
        complaintId: 0,
        note: '',
        date: '',
        studentId: {
            studentId: 0,
            studentName: '',
            studentPassword: ''
        }

    });
    const [onecomplaint, setOneComplaint] = useState({
        complaintId: 0,
        note: '',
        date: '',
        studentId: {
            studentId: 0,
            studentName: '',
            studentPassword: ''
        }
    });


    const handlecpData = (evt) => {
        console.log("handlecpData", evt.target.name, evt.target.value);
        setComplaint({
            ...complaint,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnecpData = (evt) => {
        console.log("handleOnecpData", evt.target.name, evt.target.value);
        setOneComplaint({
            ...complaint,
            [evt.target.name]: evt.target.value
        });
    }




    const viewComplaint = (evt) => {
        axios.get('http://localhost:8082/school-admin/admin/getAllComplaint')
            .then((response) => {
                setComplaintList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Complaint List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Complaints</title>
            <h1>View Complaints</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Complaints"
                        onClick={viewComplaint}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">

                            <div className="col-sm"><u>studentId </u></div>
                            <div className="col-sm"><u>complaintId</u></div>
                            <div className="col-sm"><u>note</u></div>
                            <div className="col-sm"><u>Date</u></div>
                        </p></div>
                    {complaintList.map((p, k) => {
                        console.log(p);
                        return (

                            <div k={k} className="row">

                                <div className="col-sm">{p.studentId.studentId}</div>
                                <div className="col-sm">{p.complaintId}</div>
                                <div className="col-sm">{p.note}</div>
                                <div className="col-sm">{p.date}</div>

                            </div>

                        )
                    })}
                </div>

            </div>
        </div >
    );
}
export default GetAllComplaint;