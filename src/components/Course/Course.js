import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';
import AllCourseData from '../AllCourseData/AllCourseData';

const Course = () => {
    const [courses, setCourses] = useState([]);
    let history = useHistory();
    useEffect(() => {
        // fetch('')
        //     .then(res => res.json())
        //     .then(data => {                
        //         setBatch(data);
        //     })
        const category = fakeData.filter(pd => pd.category === "course");
        setCourses(category);

    }, [])

    const handleDelete = (id) => {
        console.log(id, 'clicked')
        // fetch(`/${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         localStorage.removeItem("student");
        //         alert('Deleted')
        //         if (result) {
        //             history.goBack()
        //         }

        //     })
    }

    return (
        <div style={{ backgroundColor: '#FFFFE0', height: '94vh' }}>
            <div className=" container">
                <AllCourseData handleDelete={handleDelete} courses={courses}></AllCourseData>
            </div>

        </div>
    );
};

export default Course;