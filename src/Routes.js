import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

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
                            <Route path="/AdminLogin"> <AdminLogin /> </Route>
                            <Route path="/StudentLogin"> <StudentLogin /> </Route>
                            <Route path="/TeacherLogin"> <TeacherLogin /> </Route>
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