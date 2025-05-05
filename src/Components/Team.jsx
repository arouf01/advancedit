import "../../src/index.css";
import programmingImage from "../assets/programming.png";
import mizan from "../assets/mizan.png";
import morshed from "../assets/morshed.jpg";
import arouf from "../assets/a.rouf.jpg";
import raihan from "../assets/raihan.jpg";
import sarwar from "../assets/sarwar.png";
import naim from "../assets/naim.jpg";
import { motion } from "motion/react";

const Team = () => {
    return (
        <>
            <div className="w-full bg-[#F5F5F5] text-center py-15">
                <div className="lg:w-[1080px] mx-auto">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Our Technical <span className="animated-text">Team</span>
                        </h2>
                        {/* Divider */}
                        <div className="divider divider-primary w-[10%] mx-auto"></div>

                        {/* Cards */}
                        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 my-15">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="card w-full max-w-sm mx-auto shadow-sm bg-white"
                            >
                                <figure className="flex justify-center pt-5">
                                    <img
                                        src={mizan}
                                        alt="Card"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Al Mizan</h2>
                                    <p>Website Designer || WordPress Expert</p>
                                </div>
                            </motion.div>
                            {/* card 2 */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="card  w-full max-w-sm mx-auto shadow-sm bg-white"
                            >
                                <figure className="flex justify-center pt-5">
                                    <img
                                        src={raihan}
                                        alt="Card"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Raihan Uddin</h2>
                                    <p>Zoho Developer</p>
                                </div>
                            </motion.div>
                            {/* card 3 */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="card  w-full max-w-sm mx-auto shadow-sm bg-white"
                            >
                                <figure className="flex justify-center pt-5">
                                    <img
                                        src={arouf}
                                        alt="Card"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Abdur Rouf</h2>
                                    <p>Zoho Developer</p>
                                </div>
                            </motion.div>
                            {/* card 4 */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="card  w-full max-w-sm mx-auto shadow-sm bg-white"
                            >
                                <figure className="flex justify-center pt-5">
                                    <img
                                        src={morshed}
                                        alt="Card"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Morshed Ali</h2>
                                    <p>Zoho Developer</p>
                                </div>
                            </motion.div>
                            {/* card 5 */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="card  w-full max-w-sm mx-auto shadow-sm bg-white"
                            >
                                <figure className="flex justify-center pt-5">
                                    <img
                                        src={naim}
                                        alt="Card"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Naim Ali</h2>
                                    <p>Zoho Developer</p>
                                </div>
                            </motion.div>
                            {/* card 6 */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="card w-full max-w-sm mx-auto shadow-sm bg-white"
                            >
                                <figure className="flex justify-center pt-5">
                                    <img
                                        src={sarwar}
                                        alt="Card"
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Sarwar Jahan</h2>
                                    <p>Zoho Developer</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;