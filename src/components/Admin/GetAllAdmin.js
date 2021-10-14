import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllAdmin = (props) => {

    const [adminList, setAdminList] = useState([]);
    const [admin, setadmin] = useState({
        adminId: 0,
        adminName: '',
        adminPassword: '',
    });
    const [oneadmin, setOneadmin] = useState({
        adminId: 0,
        adminName: '',
        adminPassword: '',
    });


    const handlenpData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setadmin({
            ...admin,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnenpData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOneadmin({
            ...admin,
            [evt.target.name]: evt.target.value
        });
    }


    const viewadmin = (evt) => {
        axios.get('http://localhost:8082/school-admin/admin/getAllAdmin')
            .then((response) => {
                setAdminList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("No other Admin present");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Admin</title>
            <h1>View Admin</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Admin"
                        onClick={viewadmin}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">

                            <div className="col-sm"><u>Admin ID</u></div>
                            <div className="col-sm"><u>Admin Name</u></div>
                            <div className="col-sm"><u>Admin Password</u></div>

                        </p>
                    </div>
                    {adminList.map((p, k) => {
                        console.log(p);
                        return (

                            <div k={k} className="row">

                                <div className="col-sm">{p.adminId}</div>
                                <div className="col-sm">{p.adminName}</div>
                                <div className="col-sm">{p.adminPassword}</div>

                            </div>


                        )
                    })}
                </div>

            </div >
        </div >
    );
}
export default GetAllAdmin;