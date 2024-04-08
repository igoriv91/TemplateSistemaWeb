import { useNavigate } from "react-router-dom";
import ContainerPrimary from "../../components/containerPrimary";
import { ButtonDefault, InputDefault, LogoVertical } from "../../components/elements";

function CenterCell() {
  const navegate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white rounded-lg m-4 p-8 shadow-lg">
          <LogoVertical className="h-40 mb-4 w-full animate-fade_InUp"/>

          <p className="font-sans text-primary text-3xl mb-4 text-center">Login</p>
          
          <InputDefault className="mb-4 mt-4 h-9" placeholder="Usuário" />
          <InputDefault className="mb-4 h-9" placeholder="Senha" />
          
          <div className="flex justify-end  mt-4">
            <ButtonDefault className="" action={() => navegate("/home")} label="Entrar" />
          </div>

        </div>
      </div>
    </>
  );
}

export default function Login() {
  return (
    <ContainerPrimary>
      <CenterCell></CenterCell>
    </ContainerPrimary>
  );
}
