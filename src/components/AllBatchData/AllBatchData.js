import React from 'react';

const AllBatchData = ({ batch }) => {
    console.log(batch)
    return (
        <div>
            <table style={{ position: 'relative', top: '80px' }} className="table">
                <thead style={{ background: '#6C757D', }}>
                    <tr >
                        <th className="text-white text-center" scope="col">Batch Name</th>
                        <th className="text-white" scope="col">Start Date</th>
                        <th className="text-white" scope="col">End Date</th>
                        <th className="text-white" scope="col">Venue</th>
                        <th className="text-white" scope="col">Limit of seats</th>
                    </tr>
                </thead>


                <tbody >

                    {
                        batch.map((batch) =>

                            <tr key={batch.id} style={{ background: 'white' }}>
                                <td className=" text-center"><span className="mt-5"><b>{batch.title}</b></span></td>
                                <td><b>{batch.startTime}</b></td>
                                <td><b>{batch.endTime}</b></td>
                                <td><b>{batch.venue}</b></td>
                                <td><b>{batch.limit}</b></td>

                            </tr>
                        )
                    }

                </tbody>

            </table>

        </div>
    );
};

export default AllBatchData;