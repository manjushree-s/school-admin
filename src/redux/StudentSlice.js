import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({

  name: 'student',
  initialState: {
    studentState: {
      studentId: '',
      studentName: '',
      studentPassword: ''
    },
    allStudentsState: [],

  },
  reducers: {
      getStudentById: (state, action) => {
       state.studentState = action.payload;
      },
      getAllStudents: (state, action) => {
      state.allStudentsState = action.payload;
      },
      addStudent: (state, action) => {
          state.studentState = action.payload;
      },
      deleteStudentById: (state, action) => {
          state.studentState = action.payload;
      },
      updateStudentById:(state,action) =>{
        state.studentState=action.payload;
      }
      
    
  }
})

export const { getStudentById, getAllStudents, addstudent, deleteStudentById, updateStudentById} = studentSlice.actions;

export default studentSlice.reducer;