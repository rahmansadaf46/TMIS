import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';


const AllCourseData = ({ courses, handleDelete }) => {


    return (
        <div>
            <table style={{ position: 'relative', top: '80px' }} className="table">
                <thead style={{ background: '#6C757D', }}>
                    <tr >
                        <th className="text-white text-center" scope="col">Course Name</th>
                        <th className="text-white text-center" scope="col">Course Description</th>
                        <th className="text-white" scope="col">Available Batch</th>
                        <th className="text-white" scope="col">Action</th>
                        <th className="text-white" scope="col"></th>
                    </tr>
                </thead>


                <tbody >

                    {
                        courses.map((course) =>

                            <tr key={course.id} style={{ background: 'white' }}>
                                <td className=" text-center"><span className="mt-5"><b>{course.title}</b></span></td>
                                <td className=" text-center"><b>{course.description}</b></td>
                                <td className=" text-center"><b>
                                    <Link to={`/courseDetails/${course.id}`} className="btn btn-warning btn-sm px-4">Details</Link>
                                </b></td>
                                <td><Link to={`/courseUpdate/${course.id}`} className="btn btn-dark btn-sm">Update</Link></td>
                                <td><button onClick={() => handleDelete(course.id)} className="btn btn-danger btn-sm">Remove</button></td>

                            </tr>
                        )
                    }

                </tbody>

            </table>

        </div>
    );
};

export default AllCourseData;