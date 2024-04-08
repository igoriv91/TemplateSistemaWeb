import { InputDefault, LogoHorizontal } from "../elements";
import { SlMagnifier } from "react-icons/sl";

export default function Header() {
  return (
    <>
      <div className="flex h-14 w-full bg-primary shadow-md py-3">
        <div className="w-60">
          <LogoHorizontal className="h-full m-auto" />
        </div>
        <div className="pl-3 w-60">
          <InputDefault icon={<SlMagnifier/>} className="w-60"/>
        </div>
      </div>
    </>
  );
}
