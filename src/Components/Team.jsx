import "../../src/index.css";
import talha from "../assets/teamMember/talha.webp";
import mizan from "../assets/teamMember/mizan.webp";
import morshed from "../assets/teamMember/morshed.webp";
import arouf from "../assets/teamMember/abdur_rouf.webp";
import raihan from "../assets/teamMember/raihan.webp";
import naim from "../assets/teamMember/naim.webp";
import limon from "../assets/teamMember/limon.webp";
import { motion } from "framer-motion";

const Team = () => {
  const members = [
    { img: talha, name: "Hazrat Talha", title: "Senior Zoho Developer" },
    {
      img: mizan,
      name: "Al Mizan",
      title: "Web Designer & Developer",
    },
    { img: raihan, name: "Raihan Uddin", title: "Zoho Developer" },
    { img: arouf, name: "Abdur Rouf", title: "Zoho Developer" },
    { img: morshed, name: "Morshed Ali", title: "Zoho Developer" },
    { img: naim, name: "Naim Ali", title: "Zoho Developer" },
    { img: limon, name: "Shahriar Khan Limon", title: "Zoho Developer" },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] py-16 text-center">
      <div className="lg:w-[1080px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2">
          Our Technical{" "}
          <span className="relative inline-block animated-text text-primary">
            Team
          </span>
        </h2>
        <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded mb-12"></div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(90, 56, 194, 0.15)",
              }}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 transition duration-300 ease-in-out"
            >
              <figure className="flex justify-center">
                <img
                  src={member.img}
                  alt={`${member.title} - ${member.name} - Advanced IT`}
                  title={`${member.title} - ${member.name} - Advanced IT`}
                  className="w-28 h-28 rounded-full object-cover shadow-lg"
                />
              </figure>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#5D138B] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
