import { createSlice } from '@reduxjs/toolkit';

export const smSlice = createSlice({
    name: 'sm',
    initialState: {
        // this object stores one emp data 
        
        smState:{
        studyId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }},
        // this array stores all hw data 
        allsmState: [],
    
        // previously created properties  
        studyId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        },
      },
      reducers: {
        // methods to save spring boot data to redux store 
        
        getAllSm: (state, action) => {
          state.allsmState = action.payload;
        },
        
      }


})

export const { getAllSm } = smSlice.actions;

export default smSlice.reducer;