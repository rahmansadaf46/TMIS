import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';

const AllCourseData = ({ courses }) => {


    return (
        <div>
            <table style={{ position: 'relative', top: '80px' }} className="table">
                <thead style={{ background: '#6C757D', }}>
                    <tr >
                        <th className="text-white text-center" scope="col">Course Name</th>
                        <th className="text-white text-center" scope="col">Course Description</th>
                        <th className="text-white" scope="col">Available Batch</th>
                    </tr>
                </thead>


                <tbody >

                    {
                        courses.map((course) =>

                            <tr key={course.id} style={{ background: 'white' }}>
                                <td className=" text-center"><span className="mt-5"><b>{course.courseName}</b></span></td>
                                <td className=" text-center"><b>{course.courseDescription}</b></td>
                                <td><b>
                                    <select className="form-control" name="department" >
                                        <option disabled={true} value="Not set">Select Department</option>
                                        <option >hello</option>
                                        {/* {
                                            dept.length === 0 && <option defaultValue={student.department}>{student.department}</option>
                                        }
                                        {
                                            dept.map(department => <option defaultValue={department.department}>{department.department}</option>)
                                        } */}

                                    </select>

                                </b></td>

                            </tr>
                        )
                    }

                </tbody>

            </table>

        </div>
    );
};

export default AllCourseData;