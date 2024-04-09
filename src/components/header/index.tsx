import { InputDefault, LogoHorizontal, IconDefault } from "../elements";
import {
  FaSearch,
  FaRegBell,
  FaRegCommentAlt,
  FaAngleDown,
} from "react-icons/fa";

type Props = {
  className?: string;
};

export default function Header(settings: Props) {
  return (
    <>
      <div
        className={"flex h-14 w-full bg-primary shadow-md " + settings.className}
      >
        <div className="flex min-w-60 p-3 pl-6">
          <LogoHorizontal className="h-full" />
        </div>
        <div className="flex p-3 w-full">
          <div className="w-80">
            <InputDefault icon={<FaSearch />} />
          </div>
          <div className="flex h-full w-full justify-end">
            <IconDefault
              icon={<FaRegCommentAlt className="fill-white h-full w-full" />}
              className="mr-3 p-2"
            ></IconDefault>
            <IconDefault
              icon={<FaRegBell className="fill-white h-full w-full" />}
              className="mr-3 p-2"
            ></IconDefault>
            <p className="text-white mx-6 m-auto">Nome do Usuário</p>
            <IconDefault
              icon={<FaAngleDown className="fill-white" />}
              className="flex items-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
