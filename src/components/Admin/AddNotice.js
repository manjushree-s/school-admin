import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const AddNotice = () => {
 
    const [notice, setNotice] = useState({
 
            noticeId: 0,
            name: '',
            date:'',
            studentId:{
                adminId:0,
                adminName:'',
                adminPassword:''

            }
 
    });


 
    function handleNotice(level) {
        return (evt) => {
            if (!level) {
                console.log("handleNotice", evt.target.name, evt.target.value);
                setNotice({
                    ...notice,
                    [evt.target.name]: evt.target.value,
                });
            }
            else {
                setNotice(
                    {
                        ...notice,
                        [level]: {
                            ...notice[level],
                            [evt.target.name]: evt.target.value,
                        }
                    }
                );
            }

            evt.preventDefault();
        };
    }
 
        
    const submitNotice = (evt) =>{
        console.log(notice);
        axios.post('http://localhost:8083/school-admin/admin/addNotice',notice)
        .then((response) => {
            console.log(response);
            setNotice(response.data);
            alert('Notice added successfully')

        }).catch(error=>{
            console.log(error.message);
            alert('Notice not Added!!')
        });
        evt.preventDefault();
    }
    return (
        <div className="container" >
            <title>Add Notice</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Add Notice</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitNotice} >
                        <div>
                            <p>Admin ID</p>
                            <input
                                type="number"
                                id="adminId"
                                name="adminId"
                                className="form-control mb-3"
                                value={notice.adminId.adminId}
                                placeholder="Enter admin Id"
                                onChange={handleNotice('adminId')}
                            />
                            <p>Notice ID</p>
                            <input
                                type="number"
                                id="noticeId"
                                name="noticetId"
                                className="form-control mb-3"
                                value={notice.noticeId}
                                placeholder="noticeId"
                                onChange={handleNotice()}
                            />


                            <p>Notice</p>
                            <input
                                type="text"
                                id="note"
                                name="note"
                                className="form-control mb-3"
                                value={notice.name}
                                placeholder="Enter your notice"
                                onChange={handleNotice()}

                            />
                            <p>Date</p>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control mb-3"
                                value={notice.date}
                                placeholder="date"
                                onChange={handleNotice()}

                            />
                            

                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Submit"
                            />
                        </div>
                    </form>
                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Admin ID</th>
                                    <th scope="col">Notice Id</th>
                                    <th scope="col">Notice</th>
                                    <th scope="col">date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    <th scope="row">{notice.adminId.adminId}</th>
                                    <td>{notice.noticeId}</td>
                                    <td>{notice.name}</td>
                                    <td>{notice.date}</td>



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

export default AddNotice;