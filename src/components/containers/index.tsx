type Props = {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
};
export default function Container({ children }: Props) {
  return (
    <>
      <div className="bg-background h-dvh overflow-x-hidden">{children}</div>
    </>
  );
}

export function ContainerCard({ children, title, subTitle }: Props) {
  return (
    <>
      <div className="min-h-40 rounded-lg bg-white w-full p-4 shadow-md flex-col ">
        <p className="text-base mb-1">{title}</p>
        <p className="text-xs mb-2">{subTitle}</p>
        {children}
      </div>
    </>
  );
}
