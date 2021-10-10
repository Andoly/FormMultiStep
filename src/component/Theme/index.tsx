import { ReactNode } from "react";
import * as S from "./style";
// import { useForm } from '../../context/FormContext'

type ChildrenProps = {
  children: ReactNode;
};

export const Theme = ({ children }: ChildrenProps) => {
//   const { state } = useForm();

  return (
    <S.Container>
      <S.Area>
        {/* <Header /> */}
        <S.Steps>
          <S.Sidebar>...</S.Sidebar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};
