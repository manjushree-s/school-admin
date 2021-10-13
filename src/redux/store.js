import { configureStore } from '@reduxjs/toolkit'

import adminReducer from './AdminSlice';
import studentReducer from './StudentSlice';
import teacherReducer from './TeacherSlice';
import hwReducer from './HomeWorkSlice';
import smReducer from './StudyMaterialSlice';


console.log('0 store');

const store = configureStore(
    {
        reducer: {

            admin: adminReducer,
            student: studentReducer,
            teacher: teacherReducer,
            hw: hwReducer,
            sm: smReducer
        },
    }
);
export default store;