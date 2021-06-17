import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
import './CourseUpdate.css'


const CourseUpdate = () => {
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('', {
            method: 'PATCH',
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
    const [batch, setBatch] = useState([]);

    useEffect(() => {
        // fetch('')
        //     .then(res => res.json())
        //     .then(data => {                
        //         setBatch(data);
        //     })
        const category = fakeData.filter(pd => pd.category === "batch");
        setBatch(category);

    }, [])
    const [course, setCourse] = useState([]);

    useEffect(() => {
        // fetch('')
        //     .then(res => res.json())
        //     .then(data => {                
        //         setBatch(data);
        //     })
        const category = fakeData.filter(pd => pd.id === id);
        setCourse(category[0]);
        console.log(category[0])

    }, [])
    return (
        <div style={{ backgroundColor: '#FFFFE0', height: '94vh' }}>
            <div className=" container">
                <div className="text-center">
                    <h3>Course ID: {id}</h3>
                </div>
                <div className="col-md-12 row ">
                    <div className="col-md-4 ">
                        <form className="p-3 col-12" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for=""><b>Course Name</b></label>
                                <input  {...register("title")} defaultValue={course.title} required type="text" name="title" placeholder="Course Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label for=""><b>Description</b></label>
                                <input {...register("description")} defaultValue={course.description} style={{ padding: '20px 0px 245px 12px' }} required type="text" name="description" placeholder="Description..." className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group row">


                                <div className="form-group col-md-12 pt-1 ">
                                    <button type="submit" style={{ padding: '10px 90px', position: 'relative', left: '800px', zIndex: '1' }} className="btn btn-success">Update</button>
                                </div>
                            </div>

                        </form>

                    </div>
                    <div className="p-3 col-8">
                        <table className="table">
                            <thead style={{ background: '#6C757D', }}>
                                <tr >
                                    <th className="text-white text-center" scope="col">Batch Name</th>
                                    <th className="text-white" scope="col">Start Date</th>
                                    <th className="text-white" scope="col">End Date</th>
                                    <th className="text-white" scope="col">Venue</th>
                                    <th className="text-white" scope="col">Limit of seats</th>
                                    <th className="text-white" scope="col">Action</th>
                                </tr>
                            </thead>


                            <tbody >

                                {
                                    batch.map((batch) =>

                                        <tr key={batch.id} style={{ background: 'white' }}>
                                            <td className=" text-center"><span className="mt-5"><b>{batch.name}</b></span></td>
                                            <td><b>{batch.startDate}</b></td>
                                            <td><b>{batch.endDate}</b></td>
                                            <td><b>{batch.venue}</b></td>
                                            <td className=" text-center"><b>{batch.limitOfSeats}</b></td>
                                            <td><Link to={`/batchUpdate/${batch.id}`} className="btn btn-dark btn-sm">Update</Link></td>

                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>

                    </div>
                </div>


                <div>

                </div>
            </div>

        </div>
    );
};

export default CourseUpdate;