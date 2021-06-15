import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className="" style={{ position: 'sticky', top: '0', background: '	#FFE4B5', zIndex: '1' }}>
            <section className='d-flex '>
                <div className="col-md-7  pl-1 ">
                    <h1 className="d-flex justify-content-center align-items-center" ><span style={{ color: "#007BFF" }}>Training Management Information System</span> </h1>
                </div>
                <div className="col-md-5 mt-2">
                    <nav className="navbar navbar-expand-lg navbar-light">

                        <button onClick={handleNavCollapse} class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className=" navbar-nav ml-auto ">
                                <li className="nav-item ">
                                    <Link to="/course" style={{ textDecoration: 'none' }} className="">
                                        <span className="mr-4 btn btn-primary btn-sm">Courses</span>
                                    </Link>


                                </li>
                                <li className="nav-item ">
                                    <Link to="/addCourse" style={{ textDecoration: 'none' }} className="">
                                        <span className="mr-4 btn btn-primary btn-sm">Add Courses</span>
                                    </Link>


                                </li>
                                <li className="nav-item ">
                                    <Link to="/batch" style={{ textDecoration: 'none' }} className="">
                                        <span className="mr-4 btn btn-primary btn-sm"> Batch</span>
                                    </Link>


                                </li>
                                <li className="nav-item ">
                                    <Link to="/addBatch" style={{ textDecoration: 'none' }} className="">
                                        <span className="mr-4 btn btn-primary btn-sm">Add Batch</span>
                                    </Link>


                                </li>

                                <li className="nav-item ">
                                    <Link className="btn btn-dark  btn-sm" >Sign Out</Link>

                                </li>


                                <li className="nav-item">
                                    <div style={{ margin: '1px 2px 0px 10px' }}>



                                        <small style={{ color: 'black' }}>Admin</small>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Header;