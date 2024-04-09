import { useLocation, useNavigate } from "react-router-dom";
import ContainerPrimary from "../containers";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import { IconDefault } from "../elements";
import { FaHouse } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
  titulo: string;
  subTitulo: string;
};
export default function Template({ children, titulo, subTitulo }: Props) {
  const navegate = useNavigate();
  const location = useLocation();

  return (
    <ContainerPrimary>
      <Header className="relative" />
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <SideBar />
        <div className="p-10 h-full w-full">
          <div className="flex h-20 w-full">
            <div className="w-1/2">
              <p className="text-xl mb-2">{titulo}</p>
              <p className="text-xs">{subTitulo}</p>
            </div>
            <div className="flex justify-end items-center w-1/2 text-xs">
              <a className="mr-2">
                <IconDefault icon={<FaHouse></FaHouse>} action={()=>navegate('/dashboard')}/>
              </a>
              <a className="capitalize">{location.pathname}</a>
            </div>
          </div>
          {children}
        </div>
      </div>
    </ContainerPrimary>
  );
}
