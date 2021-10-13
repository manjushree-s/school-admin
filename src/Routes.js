import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Amenities from './components/Amenities';
import PageNotFound from './components/PageNotFound';
import AdminLogin from './components/Admin/AdminLogin';
import AdminHome from './components/Admin/AdminHome';
import StudentLogin from './components/Student/StudentLogin';
import StudentHome from './components/Student/StudentHome';
import AddComplaint from './components/Student/AddComplaint';
import GetStudyMaterial from './components/Student/GetStudyMaterialById';
import GetAllComplaint from './components/Student/GetAllComplaint';
import GetAllCourse from './components/Student/GetAllCourse';
import UpdateHomeWork from './components/Student/UpdateHomework';
import DeleteComplaint from './components/Student/DeleteComplaint';
import GetComplaintById from './components/Student/GetComplaintById';
import UpdateComplaint from './components/Student/UpdateComplaint';
import GetAllNotice from './components/Student/GetAllNotice';
import GetStudyMaterialById from './components/Student/GetStudyMaterialById';
import GetNoticeById from './components/Student/GetNoticeById';
import GetAllStudyMaterial from './components/Student/GetAllStudyMaterials';
import GetHomeworkById from './components/Student/GetHomeworkById';
import TeacherLogin from './components/Teacher/TeacherLogin';
import TeacherHome from './components/Teacher/TeacherHome';
import AddHomework from './components/Teacher/AddHomework';
import GetHomework from './components/Teacher/GetHomework';
import AddStudyMaterial from './components/Teacher/AddStudyMaterial';
import DeleteHomework from './components/Teacher/DeleteHomework';
import DeleteStudyMaterial from './components/Teacher/DeleteStudyMaterial';
import UpdateStudyMaterial from './components/Teacher/UpdateStudyMaterial';
import UpdateHomework from './components/Teacher/UpdateHomework'
import ViewHomework from './components/Teacher/ViewHomework';
import ViewStudyMaterial from './components/Teacher/ViewStudyMaterial';
import DeleteCourse from './components/Teacher/DeleteCourse';
import UpdateCourse from './components/Teacher/UpdateCourse';

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
                            <Route path="/AdminHome"> <AdminHome /></Route>
                            <Route path="/StudentLogin"> <StudentLogin /> </Route>
                            <Route path="/StudentHome"> <StudentHome /></Route>
                            <Route path="/getComplaintById"><GetComplaintById/></Route>
                            <Route path="/updateComplaint"><UpdateComplaint/></Route>
                            <Route path="/deleteComplaint"><DeleteComplaint/></Route>
                            <Route path="/studyMaterials"><GetStudyMaterial/></Route>
                            <Route path="/getAllComplaint"><GetAllComplaint/></Route>
                            <Route path="/updateHomework"><UpdateHomeWork/></Route>
                            <Route path="/getAllCourse"><GetAllCourse/></Route>
                            <Route path="/getAllNotice"><GetAllNotice/></Route>
                            <Route path="/getAllStudyMaterials"><GetAllStudyMaterial/></Route>
                            <Route path="/getStudyMaterialById"><GetStudyMaterialById/></Route>
                            <Route path="/getNoticeById"><GetNoticeById/></Route>
                            <Route path="/gethomeworkById"><GetHomeworkById/></Route>
                            <Route path="/addComplaint"><AddComplaint/></Route>
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
                            <Route path="/ViewHomework"> <ViewHomework /></Route>
                            <Route path="/ViewStudyMaterial"> <ViewStudyMaterial /></Route>
                            <Route path="/DeleteCourse"> <DeleteCourse /></Route>
                            <Route path="/UpdateCourse"> <UpdateCourse /></Route>
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