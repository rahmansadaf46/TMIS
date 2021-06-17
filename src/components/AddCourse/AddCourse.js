import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData';

const AddCourse = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.location.assign("/course");
                }
            })

            .catch(error => {
                console.error(error)
            })


    }

    return (
        <div>
            <div className="d-flex">
                <div style={{ backgroundColor: '#FFFFE0', height: '94vh' }} className="col-md-12 pt-4 ">
                    <div className="col-md-12 row mt-5">
                        <div className="col-md-12 ">
                            <h2 className="text-center"><u>Add a Course</u></h2>
                            <form className="p-3 container col-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label for=""><b>Enter Course Name</b></label>
                                    <input  {...register("title")} required type="text" name="title" placeholder="Course Name" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label for=""><b>Enter Description</b></label>
                                    <input {...register("description")} style={{ padding: '20px 0px 80px 12px' }} required type="text" name="description" placeholder="Description..." className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">

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

export default AddCourse;