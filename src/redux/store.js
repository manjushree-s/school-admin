import { configureStore } from '@reduxjs/toolkit'

import adminReducer from './AdminSlice';
import studentReducer from './StudentSlice';
import teacherReducer from './TeacherSlice';



console.log('0 store');

const store = configureStore(
    {
        reducer: {
           
            admin:adminReducer,
            student:studentReducer,
            teacher:teacherReducer,
        },
    }
);
export default store;