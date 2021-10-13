import { createSlice } from '@reduxjs/toolkit';

export const hwSlice = createSlice({
    name: 'hw',
    initialState: {
        // this object stores one emp data 
        
        hwState:{
        homeId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }},
        // this array stores all hw data 
        allhwState: [],
    
        // previously created properties  
        homeId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        },
      },
      reducers: {
        // methods to save spring boot data to redux store 
        
        getAllHw: (state, action) => {
          state.allhwState = action.payload;
        },
        
      }


})

export const { getAllHw } = hwSlice.actions;

export default hwSlice.reducer;