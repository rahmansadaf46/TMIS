import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData';

const AddBatch = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [batch, setBatch] = useState([]);
    const [courseName, setCourseName] = useState('');
    const [currentCourse, setCurrentCourse] = useState({});
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
    const changeCourse = (newCourse) => {
        setCourseName(newCourse)
        const category = courses.find(pd => pd.courseName === newCourse);
        console.log(category);
        setCurrentCourse(category);
    }
    const onSubmit = data => {

        data.course = currentCourse;
        console.log(data);

        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.location.assign("/batch");
                }
            })

            .catch(error => {
                console.error(error)
            })


    }

    const [sDate, setSDate] = useState("");
    console.log(sDate);
    return (
        <div>
            <div className="d-flex">
                <div style={{ backgroundColor: '#FFFFE0', height: '94vh' }} className="col-md-12 pt-4 ">
                    <div className="col-md-12 row mt-5">
                        <div className="col-md-12 ">
                            <h2 className="text-center"><u>Add a Batch</u></h2>
                            <form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label for=""><b>Enter Batch Name</b></label>
                                    <input {...register("name")} required type="text" name="name" placeholder="Name" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group row mb-1">
                                    <div className="form-group col-6">
                                        <label for=""><b>Start Date</b></label>
                                        <input {...register("startDate")} onChange={e => setSDate(e.target.value)} required type="date" name="startDate" className="form-control" />
                                        {errors.roll && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group col-6">
                                        <label for=""><b>End Date</b></label>
                                        <input {...register("endDate")} min={sDate} defaultValue={sDate} required type="date" name="endDate" placeholder="Student's Roll" className="form-control" />
                                        {errors.roll && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for=""><b>Enter Venue</b></label>
                                        <input {...register("venue")} required type="text" name="venue" placeholder="Venue" className="form-control" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for=""><b>Enter No. of seats</b></label>
                                        <input {...register("limitOfSeats")} required type="number" name="limitOfSeats" placeholder="Limit" className="form-control" />
                                        {errors.mobile && <span className="text-danger">This field is required</span>}
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for=""><b>Select Course</b></label>
                                        <select
                                            onChange={(event) => changeCourse(event.target.value)}
                                            value={courseName} className="form-control">
                                            <option value="Not set">Select Course</option>

                                            {
                                                courses.map(course => <option value={course.courseName}>{course.courseName}</option>)
                                            }


                                        </select>
                                        {errors.age && <span className="text-danger">This field is required</span>}
                                    </div>


                                </div>
                                <div className="form-group row">


                                    <div className="form-group col-md-12 mt-4 pt-1 d-flex justify-content-center">
                                        <button type="submit" style={{ padding: '10px 90px' }} className="btn text-white btn-success">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default AddBatch;