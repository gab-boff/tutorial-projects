import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Vamos construir algo juntos
          </p>
          <h1 className="py-4 text-gray-700">
            Olá, eu sou o <span className="text-[#5651e5]">Gabriel</span>
          </h1>
          <h1 className="py-4 text-gray-700">Um Desenvolvedor de Software</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Eu sou um Desenvolvedor de Software focado em Front-End, evoluindo
            todos os dias para criar melhores experiências digitais. Atualmente,
            estou me aprofundando em coisas como Design e Back-End, porém o foco
            maior continua no Front-End.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
