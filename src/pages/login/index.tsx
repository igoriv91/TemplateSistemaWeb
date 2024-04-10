import { useNavigate } from "react-router-dom";
import ContainerPrimary from "@/components/containers";
import {
  ButtonDefault,
  InputDefault,
  LogoVertical,
} from "@/components/elements";

export default function Login() {
  const navegate = useNavigate();

  return (
    <ContainerPrimary>
      <div className="flex justify-center items-center w-full h-full ">
        <div>
        <LogoVertical className="h-40 mb-4 animate-fade_InUp w-full" />
        <div className="bg-white rounded-lg p-4 shadow-lg w-80">
          <p className="font-sans text-primary text-3xl mb-4 text-center">
            Login
          </p>

          <InputDefault className="mb-4 h-9" placeholder="Usuário" />
          <InputDefault className="mb-4 h-9" placeholder="Senha" />

          <div className="flex justify-end">
            <ButtonDefault
              className=""
              action={() => navegate("/dashboard")}
              label="Entrar"
            />
          </div>
        </div>
        </div>
      </div>
    </ContainerPrimary>
  );
}
