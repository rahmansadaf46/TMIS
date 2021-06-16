import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import AllCourseData from '../AllCourseData/AllCourseData';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // fetch('')
        //     .then(res => res.json())
        //     .then(data => {                
        //         setBatch(data);
        //     })
        const category = fakeData.filter(pd => pd.category === "course");
        setCourses(category);

    }, [])
    return (
        <div style={{ backgroundColor: '#FFFFE0', height: '94vh' }}>
            <div className=" container">
                <AllCourseData courses={courses}></AllCourseData>
            </div>

        </div>
    );
};

export default Course;