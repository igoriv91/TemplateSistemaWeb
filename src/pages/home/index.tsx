
import ContainerPrimary from "../../components/containerPrimary";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

export default function Home() {
  return (
    <ContainerPrimary>
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideBar />
      </div>
    </ContainerPrimary>
  );
}
