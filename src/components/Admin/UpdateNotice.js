import axios from 'axios';
import React, { useState, useEffect } from 'react';



const UpdateNotice = () => {


    const [hw, sethw] = useState({

        noticeId: 0,
        name: '',
        notice: '',
        date: '',
    });

    const handlehwData = level => (event) => {

        if (!level) {
            console.log("handlehwData", event.target.name, event.target.value);
            sethw({
                ...hw,
                [event.target.name]: event.target.value,

            });
        }
        else{
            sethw(
                {
                    ...hw,
                    [level]: {
                        ...hw[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }



    const submitUpdatehw = (event) => {

        console.log(hw);
        axios.put('http://localhost:8082/school-admin/admin/updateNotice', hw)
            .then((response) => {
                console.log(response);
                sethw(response.data);
                alert('Notice update Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Update Notice</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Update Notice</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitUpdatehw} >
                        <div>
                            <p>Notice ID</p>
                            <input
                                type="number"
                                id="noticeId"
                                name="noticeId"
                                className="form-control mb-3"
                                value={hw.noticeId}
                                placeholder="Enter Notice ID"
                                onChange={handlehwData()}
                            />
                            <p>Name</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control mb-3"
                                value={hw.name}
                                placeholder="Enter Name"
                                onChange={handlehwData()}

                            />
                            <p>Notice</p>
                            <input
                                type="text"
                                id="notice"
                                name="notice"
                                className="form-control mb-3"
                                value={hw.notice}
                                placeholder="Enter Notice"
                                onChange={handlehwData()}

                            />
                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Homework"
                            />
                            <p>Date</p>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control mb-3"
                                value={hw.date}
                                placeholder="date"
                                onChange={handleHwData()}
                            />
                        </div>
                    </form>
                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Notice Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Notice</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{hw.noticeId}</td>
                                    <td>{hw.name}</td>
                                    <td>{hw.notice}</td>
                                    <td>{hw.date}</td>

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

export default UpdateNotice;