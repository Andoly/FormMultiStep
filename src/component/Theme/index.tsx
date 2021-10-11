import { ReactNode } from "react";
import { SidebarItem } from "../SideBarItem";
import * as S from "./style";
import { useForm } from "../../context/FormContext";

type ChildrenProps = {
  children: ReactNode;
};

export const Theme = ({ children }: ChildrenProps) => {
  const { state } = useForm();

  return (
    <S.Container>
      <S.Area>
        <S.Steps>
          <S.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              activeProp={state.currentStep === 1}
            />

            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path={state.name ? "/step2" : "/"}
              activeProp={state.currentStep === 2}
            />

            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path={state.name && state.level ? "/step3" : "/"}
              activeProp={state.currentStep === 3}
            />
          </S.Sidebar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};
