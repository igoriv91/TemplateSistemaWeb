import React from "react";
import { IconContext } from "react-icons";
import {
  FaRegFileLines,
  FaFilePen,
  FaUsers,
  FaTableCellsLarge,
  FaRegUser,
  FaChalkboardUser,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type PropsItemMenu = {
  className?: string;
  icon: React.ReactNode;
  name: string;
  rota: string;
};

function ItemMenu(settings: PropsItemMenu) {
  const navegate = useNavigate();
  return (
    <a onClick={() => navegate(settings.rota)} className="cursor-pointer">
      <div
        className={
          "h-10 px-6 flex p-2 hover:bg-secundary transition-all duration-300" +
          settings.className
        }
      >
        <IconContext.Provider
          value={{ className: "fill-gray-100 h-full mr-3" }}
        >
          {settings.icon}
        </IconContext.Provider>
        <p className="text-gray-100 ">{settings.name}</p>
      </div>
    </a>
  );
}

export default function SideBar() {
  return (
    <>
      <div className="bg-primary min-w-60">
        <div className="h-12 px-6 flex items-center">
          <p className="text-gray-400">Inicial</p>
        </div>
        <ItemMenu
          icon={<FaTableCellsLarge />}
          name={"Dashboard"}
          rota={"/dashboard"}
        />
        <div className="h-12 px-6 flex items-center">
          <p className="text-gray-400">Cadastros</p>
        </div>
        <ItemMenu icon={<FaRegUser />} name={"Alunos"} rota={"/aluno"} />
        <ItemMenu icon={<FaFilePen />} name={"Matrícula"} rota={"/dashboard"} />
        <ItemMenu
          icon={<FaChalkboardUser />}
          name={"Profesores"}
          rota={"/dashboard"}
        />
        <ItemMenu icon={<FaUsers />} name={"Turmas"} rota={"/dashboard"} />
        <div className="h-12 px-6 flex items-center">
          <p className="text-gray-400">Controles</p>
        </div>
        <ItemMenu
          icon={<FaRegFileLines />}
          name={"Relatório"}
          rota={"/dashboard"}
        />
      </div>
    </>
  );
}
