import React from 'react';
import { useHistory } from 'react-router';



const Logout = () => {

    const history = useHistory();

    
    const onSubmitAdmin = (event) => {

        history.push('/AdminLogin');

        event.preventDefault();
    }

    const onSubmitTeacher = (event) => {

        history.push('/TeacherLogin');
            
        event.preventDefault();
    }

    const onSubmitStudent = (event) => {

        history.push('/StudentLogin');
            
        event.preventDefault();
    }

    return (
    <div className="container">Logging out...</div>
    );
}

export default Logout;