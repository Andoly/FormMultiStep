import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../component/Theme";
import { useForm, FormActions } from "../../context/FormContext";
import * as S from "./style";

export const FormStep3 = () => {
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value,
    });
  };
  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email && state.github) {
      console.log(state)
    } else {
      alert("Preencha os dados");
    }
  };

  return (
    <Theme>
      <S.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input type="email" value={state.email} onChange={handleEmailChange} />
        </label>
        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  );
};
