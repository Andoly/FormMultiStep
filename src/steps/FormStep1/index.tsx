import { ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router";
import { Theme } from "../../component/Theme";
import { useForm, FormActions } from "../../context/FormContext";
import * as S from "./style";

export const FormStep1 = () => {
  const { state, dispatch } = useForm();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,      
    });
  }, [dispatch]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: event.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.name) {
      history.push("/step2");
    } else {
      alert("Preencha seu nome");
    }
  };

  return (
    <Theme>
      <S.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  );
};
