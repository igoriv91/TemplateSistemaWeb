type Props = {
  children: React.ReactNode;
};
export default function ContainerPrimary({ children }: Props) {
  return (
    <>
      <div className="bg-background h-dvh">{children}</div>
    </>
  );
}
