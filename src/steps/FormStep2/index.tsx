import { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { SelectOption } from "../../component/SelectOption";
import { Theme } from "../../component/Theme";
import { useForm, FormActions } from "../../context/FormContext";
import * as S from "./style";

export const FormStep2 = () => {
  const { state, dispatch } = useForm();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.level) {
      history.push("/step3");
    } else {
      alert("Preencha os dados");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>

        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  );
};
