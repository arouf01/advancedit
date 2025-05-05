import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <>
            <div className="mb-15">
                <div className="lg:w-[1080px] mx-auto justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                    {/* Card 1 */}
                    <div className="card w-full max-w-sm text-black shadow card-xl services">
                        <div className="card-body">
                            <h2 className="card-title">Zoho Customization</h2>
                            <p>Modeling your business processes to Zoho.</p>
                            <div className="justify-center card-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-primary"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card w-full max-w-sm text-black shadow card-xl services">
                        <div className="card-body">
                            <h2 className="card-title">Zoho Integration</h2>
                            <p>Connect your Zoho to other 3rd party apps.</p>
                            <div className="justify-center card-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-primary"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card w-full max-w-sm text-black shadow card-xl services">
                        <div className="card-body">
                            <h2 className="card-title">Zoho One</h2>
                            <p>
                                Our Creator developer and CRM experts will help you to customize
                                ZOHO CRM to setup your business.
                            </p>
                            <div className="justify-center card-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-primary"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card w-full max-w-sm text-black shadow card-xl services">
                        <div className="card-body">
                            <h2 className="card-title">Zoho Consulting</h2>
                            <p>
                                Advanced IT Solutions is an IT Consulting firm providing ZOHO
                                services.
                            </p>
                            <div className="justify-center card-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-primary"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="card w-full max-w-sm text-black shadow card-xl services">
                        <div className="card-body">
                            <h2 className="card-title">Zoho Website</h2>
                            <p>
                                We build business or ecommerce websites, accept orders, track
                                inventory, process payments.
                            </p>
                            <div className="justify-center card-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-primary"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="card w-full max-w-sm text-black shadow card-xl services">
                        <div className="card-body">
                            <h2 className="card-title">Zoho Analytics & Report</h2>
                            <p>
                                Visually analyze & unhide insights of your data using business
                                intelligence software and data sources.
                            </p>
                            <div className="justify-center card-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-primary"
                                >
                                    <Link to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;