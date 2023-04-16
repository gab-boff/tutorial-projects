import React from "react";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou eu?</h2>
          <p className="py-2 text-gray-600">
            Apaixonado por aprender, novos desafios são o que me motivam,
            principalmente se for necessário aprender algo novo para
            solucioná-los. Cursei Desenvolvimento de Software Web na Trybe, onde
            comecei a aprimorar minhas habilidades e conhecimentos. Atualmente
            já trabalhei principalmente com React.js, Next.js e Node.js.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Veja meus projetos.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://i.pinimg.com/originals/19/01/53/190153b3a910d34d186f4eaf0af3c6ec.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
