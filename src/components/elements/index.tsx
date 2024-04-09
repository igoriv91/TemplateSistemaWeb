import React from "react";

type PropsInput = {
  placeholder?: string;
  label?: string;
  className?: string;
  icon?: React.ReactNode;
};

type PropsButton = {
  label: string;
  className?: string;
  action: React.MouseEventHandler;
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

export function InputDefault(settings: PropsInput) {
  return (
    <>
      <label>
        {settings.label}
        <div className="absolute ml-2 mt-2 " style={{'color':'white'}}>{settings.icon}</div>
        <input
          className={`${settings.icon ? "pl-7 " + settings.className : settings.className}`}
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
        <button
          className={settings.className}
          onClick={settings.action}
        >
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
      <a className={settings.className} onClick={() => settings.action}>{settings.icon}</a>
    </>
  );
}
