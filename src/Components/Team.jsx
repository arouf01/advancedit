import "../../src/index.css";
import mizan from "../assets/teamMember/mizan.webp";
import morshed from "../assets/teamMember/morshed.webp";
import arouf from "../assets/teamMember/a.rouf.webp";
import raihan from "../assets/teamMember/raihan.webp";
import sarwar from "../assets/teamMember/sarwar.webp";
import naim from "../assets/teamMember/naim.webp";
import { motion } from "motion/react";

const Team = () => {
  return (
    <div className="w-full bg-white py-16 text-center">
      <div className="lg:w-[1080px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2">
          Our Technical{" "}
          <span className="relative inline-block animated-text text-primary">
            Team
          </span>
        </h2>
        <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded mb-12"></div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: mizan,
              name: "Al Mizan",
              title: "Website Designer || WordPress Expert",
            },
            { img: raihan, name: "Raihan Uddin", title: "Zoho Developer" },
            { img: arouf, name: "Abdur Rouf", title: "Zoho Developer" },
            { img: morshed, name: "Morshed Ali", title: "Zoho Developer" },
            { img: naim, name: "Naim Ali", title: "Zoho Developer" },
            { img: sarwar, name: "Sarwar Jahan", title: "Zoho Developer" },
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(90, 56, 194, 0.15)",
              }}
              className="card bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <figure className="flex justify-center pt-6">
                <img
                  src={member.img}
                  alt={`${member.title} - ${member.name} - Advanced IT`}
                  title={`${member.title} - ${member.name} - Advanced IT`}
                  className="w-28 h-28 rounded-full object-cover  shadow-md"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-lg font-semibold text-[#5A38C2] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
