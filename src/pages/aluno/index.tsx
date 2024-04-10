import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { ContainerCard } from "@/components/containers";
import Template from "@/components/template";
import {
  ActiveInactive,
  ButtonDefault,
  EActiveInactive,
} from "@/components/elements";
import { FaPen } from "react-icons/fa";

export default function Aluno() {
  return (
    <>
      <Template
        titulo="Alunos"
        subTitulo="Gerencie os alunos cadastrado, alterando ou apenas consultando as informações."
      >
        <ContainerCard
          title="Lista de alunos"
          subTitle="Alunos cadastrados no sistema"
        >
          <div className=" border rounded-lg px-4">
            <Table className="overflow-y-scroll h-64">
              <TableHeader>
                <TableHead className="w-1/">#</TableHead>
                <TableHead className="w-auto">Nome</TableHead>
                <TableHead className="w-1/5 text-center">Status</TableHead>
                <TableHead className="w-1/5 text-center">
                  Data Nascimento
                </TableHead>
                <TableHead className="w-1/5 text-center">Editar</TableHead>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>Aluno {i + 1}</TableCell>
                      <TableCell className="text-center">
                        <ActiveInactive
                          status={
                            i != 5
                              ? EActiveInactive.Ativo
                              : EActiveInactive.Inativo
                          }
                        />
                      </TableCell>
                      <TableCell className="text-center">22/02/1991</TableCell>
                      <TableCell className="text-center">
                        <ButtonDefault
                          className="h-5 w-6 bg-transparent hover:bg-transparent"
                          action={() => {}}
                          icon={
                            <FaPen className="hover:opacity-75 transition-all duration-300"></FaPen>
                          }
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </ContainerCard>
      </Template>
    </>
  );
}
