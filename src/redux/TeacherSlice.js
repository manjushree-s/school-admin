import { createSlice } from '@reduxjs/toolkit';

export const teacherSlice = createSlice({

  name: 'teacher',
  initialState: {
    teacherState: {
      teacherId: '',
      teacherName: '',
      teacherPassword: ''
    },
    allTeachersState: [],

  },
  reducers: {
      getTeacherById: (state, action) => {
       state.teacherState = action.payload;
      },
      getAllTeachers: (state, action) => {
      state.allTeachersState = action.payload;
      },
      addTeacher: (state, action) => {
          state.teacherState = action.payload;
      },
      deleteTeacherById: (state, action) => {
          state.teacherState = action.payload;
      },
      updateTeachertById:(state,action) =>{
        state.teacherState=action.payload;
      }
      
    
  }
})

export const { getTeacherById, getAllTeachers, addTeacher, deleteTeacherById, updateTeacherById} = teacherSlice.actions;

export default teacherSlice.reducer;