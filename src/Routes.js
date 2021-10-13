import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminLogin from './components/Admin/AdminLogin';
import TeacherLogin from './components/Teacher/TeacherLogin';
import TeacherHome from './components/Teacher/TeacherHome';
import AddHomework from './components/Teacher/AddHomework';
import GetHomework from './components/Teacher/GetHomework';
import AddStudyMaterial from './components/Teacher/AddStudyMaterial';
import GetStudyMaterial from './components/Teacher/GetStudyMaterial';
import DeleteHomework from './components/Teacher/DeleteHomework';
import DeleteStudyMaterial from './components/Teacher/DeleteStudyMaterial';
import UpdateStudyMaterial from './components/Teacher/UpdateStudyMaterial';
import UpdateHomework from './components/Teacher/UpdateHomework';
import StudentLogin from './components/Student/StudentLogin';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Amenities from './components/Amenities';

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/about"> <About /> </Route>
                            <Route path="/contact"> <Contact /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/amenities"> <Amenities /> </Route>
                            <Route path="/AdminLogin"> <AdminLogin /> </Route>
                            <Route path="/StudentLogin"> <StudentLogin /> </Route>
                            <Route path="/TeacherLogin"> <TeacherLogin /></Route>
                            <Route path="/TeacherHome"> <TeacherHome /></Route>
                            <Route path="/AddHomework"> <AddHomework /></Route>
                            <Route path="/GetHomework"> <GetHomework /></Route>
                            <Route path="/AddStudyMaterial"> <AddStudyMaterial /></Route>
                            <Route path="/GetStudyMaterial"> <GetStudyMaterial /></Route>
                            <Route path="/DeleteHomework"> <DeleteHomework /></Route>
                            <Route path="/DeleteStudyMaterial"> <DeleteStudyMaterial /></Route>
                            <Route path="/UpdateStudyMaterial"> <UpdateStudyMaterial /></Route>
                            <Route path="/UpdateHomework"> <UpdateHomework /></Route>
                            <Route path="/*"> <PageNotFound /> </Route>

                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default Routes;