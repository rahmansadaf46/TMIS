import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import AllBatchData from '../AllBatchData/AllBatchData';
import Header from '../Header/Header';

const Batch = () => {
    const [batches, setBatch] = useState([]);

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
                <AllBatchData batch={batches}></AllBatchData>
            </div>

        </div>
    );
};

export default Batch;