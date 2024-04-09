import { InputDefault, LogoHorizontal,IconDefault } from "../elements";
import { FaSearch , FaRegBell, FaRegCommentAlt, FaAngleDown  } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="flex h-14 w-full bg-primary shadow-md p-3">
        <div className="w-60 mr-3">
          <LogoHorizontal className="h-full m-auto" />
        </div>
        <div className="w-72">
          <InputDefault icon={<FaSearch/>}/>
        </div>
        <div className="flex h-full w-full justify-end">
          <IconDefault icon={<FaRegCommentAlt className="fill-white h-full w-full"/>} className="mr-3 p-1"></IconDefault>
          <IconDefault icon={<FaRegBell className="fill-white h-full w-full"/>} className="mr-3 p-1"></IconDefault>
          <p className="text-white mx-6">Nome do Cliente</p> 
          <IconDefault icon={<FaAngleDown className="fill-white"/>} className="flex items-center"/>
        </div>
      </div>
    </>
  );
}
