import { ContainerCard } from "../../components/containers";
import { IconDefault } from "../../components/elements";
import Template from "../../components/template";
import {
  FaDollarSign,
  FaUser,
  FaChalkboardUser,
  FaCalendarDays,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

type Table = {
  columns: string[];
  lines: string[][];
};

type PropsCard = {
  title: string;
  content?: string;
  icon: React.ReactNode;
  table?: Table | null;
};

function Card({ title, content, icon, table }: PropsCard): React.ReactNode {
  return (
    <ContainerCard>
      <div className="flex justify-between">
        <p>{title}</p>
        <IconDefault icon={icon} className="rounded-full bg-slate-200 p-2" />
      </div>
      <p className="text-5xl font-bold my-4">{content}</p>
      {table ? (
        <>
          <div className="mx-4">
            <div className="flex justify-between border-b py-2 font-bold">
              {table.columns.map((element, index) => {
                return (
                  <p
                    className="flex-1 overflow-x-hidden text-nowrap text-center"
                    key={index}
                  >
                    {element}
                  </p>
                );
              })}
            </div>

            {table.lines.map((line) => {
              return (
                <div className="flex justify-between">
                  {line.map((data) => {
                    return (
                      <p className="flex-1 overflow-x-hidden text-nowrap text-center">
                        {data}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </ContainerCard>
  );
}

export default function Dashboard() {
  return (
    <Template
      titulo="Dashboard"
      subTitulo="Para mais detalhes acessar as telas clique nos cards"
    >
      <div className="flex gap-8 w-full">
        <Card
          title="Previsão de Faturamento (abril)"
          content="R$ 100 000,00"
          icon={<FaDollarSign></FaDollarSign>}
        />
        <Card
          title="Quantidade de Alunos Ativos"
          content="1 542"
          icon={<FaUser></FaUser>}
        />
        <Card
          title="Quantidade de Professores Ativos"
          content="10"
          icon={<FaChalkboardUser></FaChalkboardUser>}
        />
      </div>
      <div className="flex gap-8 w-full mt-8">
        <Card
          title="Aniversariantes do dia (09/04/2024)"
          icon={<FaCalendarDays></FaCalendarDays>}
          table={{
            columns: ["Aluno", "Idade"],
            lines: [
              ["Igor Vitor dos Santos Januário", "33"],
              ["Leoonando Leoncio Silva Nascimento", "27"],
            ],
          }}
        />
        <Card
          title="Mensalidade vencendo Hoje"
          icon={<FaFileInvoiceDollar></FaFileInvoiceDollar>}
          table={{
            columns: ["Aluno", "Valor (R$)", "Dias Atraso"],
            lines: [
              ["Igor Vitor dos Santos Januário", "33,00", "5"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
              ["Leoonando Leoncio Silva Nascimento", "27,00", "1"],
            ],
          }}
        />
      </div>
    </Template>
  );
}
