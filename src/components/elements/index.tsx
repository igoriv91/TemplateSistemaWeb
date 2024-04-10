import React from "react";

type PropsInput = {
  placeholder?: string;
  label?: string;
  className?: string;
  icon?: React.ReactNode;
};

type PropsButton = {
  label?: string;
  className?: string;
  action: React.MouseEventHandler;
  icon?: React.ReactNode;
};

type PropsLogo = {
  className?: string;
  action?: React.MouseEventHandler;
};

type PropsIcon = {
  icon: React.ReactNode;
  action?: React.MouseEventHandler;
  className?: string;
};
export enum EActiveInactive {
  Ativo = "Ativo",
  Inativo = "Inativo",
}
type PropsActiveInactive = {
  status: EActiveInactive;
};

export function InputDefault(settings: PropsInput) {
  return (
    <>
      <label>
        {settings.label}
        <div className="absolute ml-2 mt-2 " style={{ color: "white" }}>
          {settings.icon}
        </div>
        <input
          className={`${
            settings.icon ? "pl-7 " + settings.className : settings.className
          }`}
          placeholder={settings.placeholder}
        ></input>
      </label>
    </>
  );
}

export function ButtonDefault(settings: PropsButton) {
  return (
    <>
      <div>
        <button className={settings.className} onClick={settings.action}>
          {settings.icon}
          {settings.label}
        </button>
      </div>
    </>
  );
}

export function LogoVertical(settings: PropsLogo) {
  return (
    <>
      <img
        src="src\assets\magna_logo_light.svg"
        alt=""
        className={settings.className}
        onClick={() => settings.action}
      />
    </>
  );
}

export function LogoHorizontal(settings: PropsLogo) {
  return (
    <>
      <img
        src="src\assets\magna_logo_dark_horizontal.svg"
        alt=""
        className={settings.className}
        onClick={() => settings.action}
      />
    </>
  );
}

export function IconDefault(settings: PropsIcon) {
  return (
    <>
      <a className={settings.className} onClick={settings.action}>
        {settings.icon}
      </a>
    </>
  );
}

export function ActiveInactive(settings: PropsActiveInactive) {
  return (
    <>
      <div className="flex justify-center">
        <p
          className={`${
            settings.status === EActiveInactive.Ativo
              ? "bg-green-600"
              : "bg-red-600"
          } text-white h-full p-1 px-2 rounded-md`}
        >
          {settings.status}
        </p>
      </div>
    </>
  );
}
