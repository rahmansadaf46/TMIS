import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';
import AllBatchData from '../AllBatchData/AllBatchData';


const CourseBatch = () => {
    const [batches, setBatch] = useState([]);
    const { id } = useParams();
    console.log(id)
    const {
        api: [api]
    } = useContext(UserContext);

    useEffect(() => {
        // fetch('')
        //     .then(res => res.json())
        //     .then(data => {                
        //         setBatch(data);
        //     })
        const category = fakeData.filter(pd => pd.category === "batch");
        setBatch(category);

    }, [])
    return (
        <div style={{ backgroundColor: '#FFFFE0', height: '94vh' }}>
            <div className=" container">
                <div className="text-center">
                    <h3>Course Name</h3>
                </div>
                <AllBatchData batch={batches}></AllBatchData>
            </div>

        </div>
    );
};

export default CourseBatch;