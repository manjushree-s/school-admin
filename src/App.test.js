import { render } from '@testing-library/react';
import { screen, p, button, getByTestId, getByText,queryByTestId  } from '@testing-library/dom';

import AdminLogin from './components/Admin/AdminLogin';
import StudentLogin from './components/Student/StudentLogin';
import TeacherLogin from './components/Teacher/TeacherLogin';
import store from './redux/store';
import { Provider } from 'react-redux';

// test case for adminId in adminlogin
test('find adminId in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
});


// test case for adminName in adminLogin
test('find adminName in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit1')).not.toBeInTheDocument();
});


// test for adminPassword in adminLogin
test('find adminPassword in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'adminPassword')).toBeInTheDocument();
});


//test case for submint in adminLogin
test('find submit1 in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit')).toBeInTheDocument()
});


//test case for submint1 in adminLogin
test('find submit1 in AdminLogin', () => {
  render(
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit1')).not.toBeInTheDocument();
});

// test case for studentId in studentlogin
test('find studentId in studentLogin', () => {
  render(
    <Provider store={store}>
      <StudentLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'studentId')).toBeInTheDocument();
});


// test case for studentName in studentLogin
test('find studentName in AdminLogin', () => {
  render(
    <Provider store={store}>
       <StudentLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'studentName')).not.toBeInTheDocument();
});


// test for studentPassword in studentLogin
test('find studentPassword in StudentLogin', () => {
  render(
    <Provider store={store}>
      <StudentLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'studentPassword')).toBeInTheDocument();
});


//test case for submint in studentLogin
test('find submit in AdminLogin', () => {
  render(
    <Provider store={store}>
      <StudentLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit')).toBeInTheDocument()
});


//test case for submint1 in studentLogin
test('find submit1 in AdminLogin', () => {
  render(
    <Provider store={store}>
      <StudentLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit1')).not.toBeInTheDocument();
});



// test case for teacherId in teacherlogin
test('find teacherId in TeacherLogin', () => {
  render(
    <Provider store={store}>
      <TeacherLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'teacherId')).toBeInTheDocument();
});


// test case for teacherName in teacherlogin
test('find teacherName in TeacherLogin', () => {
  render(
    <Provider store={store}>
      <TeacherLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'teacherName')).not.toBeInTheDocument();
});


// test for teacherPassword in teacherlogin
test('find teacherPassword in TeacherLogin', () => {
  render(
    <Provider store={store}>
      <TeacherLogin />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'teacherPassword')).toBeInTheDocument();
});


//test case for submint in teacherlogin
test('find submit in TeacherLogin', () => {
  render(
    <Provider store={store}>
      <TeacherLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit')).toBeInTheDocument()
});


//test case for submint1 in teacherlogin
test('find submit1 in TeacherLogin', () => {
  render(
    <Provider store={store}>
       <TeacherLogin />
    </Provider>
  );
  expect( queryByTestId(document.documentElement, 'submit1')).not.toBeInTheDocument();
});