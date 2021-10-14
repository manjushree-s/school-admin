import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllNotice = (props) => {

    const [noticeList, setnoticeList] = useState([]);
    const [notice, setnotice] = useState({
        date: "",
        name: "",
        notice: "",
        noticeId: 0
        

    });
    const [onenotice, setOnenotice] = useState({
        date: "",
        name: "",
        notice: "",
        noticeId: 0
        

    });


    const handlenpData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setnotice({
            ...notice,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnenpData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOnenotice({
            ...notice,
            [evt.target.name]: evt.target.value
        });
    }




    const viewnotice = (evt) => {
        axios.get('http://localhost:8082/school-admin/student/getAllNotice')
            .then((response) => {
                setnoticeList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("No new Notice");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Notice</title>
            <h1>View Notice</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Notice"
                        onClick={viewnotice}
                    />
                </div>
                {/* <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Date </th>
                                <th scope="col">Name</th>
                                <th scope="col">Notices</th>
                                <th scope="col">NoticeId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {noticeList.map((p, k) => {
                                    console.log(p);
                                    return (
                                        <div k={k}>
                                            <th scope="row">{p.date}</th>
                                            
                                            <td>{p.name}</td>
                                            <td>{p.notice}</td>
                                            <td>{p.noticeId}</td>
                                        </div>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div> */}

<div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>Date</u>
                            </div>
                            <div className="col-sm"><u>Name</u></div>
                            <div className="col-sm"><u>Notice</u></div>
                            <div className="col-sm"><u>Notice Id</u></div>
 
                        </p>


 
                    </div>
                    {noticeList.map((e, k) => {
                        console.log(e);
                        return (
 
                            <div k={k} className="row">
 
                                <div className="col-sm">
                                    {e.date}
                                </div>
 
                                <div className="col-sm">
                                    {e.name}
                                </div>

                                <div className="col-sm">
                                    {e.notice}
                                </div>

                                <div className="col-sm">
                                    {e.noticeId}
                                </div>
 
                            </div>
 
                        )
                    })}
                    
                </div>

            </div>
        </div >
    );
}
export default GetAllNotice;
