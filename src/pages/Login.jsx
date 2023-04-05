import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import logo from '../images/logo.svg';
import tomatepicture from '../images/tomate.svg';
import * as S from './styles/Login.style';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword, setValidPassword] = useState(false);
  const [isValidMail, setValidMail] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [pageLoading, setLoading] = useState(true);

  const validateInputs = () => {
    const setMinVal = 2;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validateMail = regexEmail.test(email);

    if(password.length > setMinVal){
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
    if(validateMail) {
      setValidMail(true)
    } else {
      setValidMail(false)
    }

    if (password.length > setMinVal && validateMail) {
      setDisabled(false);
    } else { setDisabled(true); }
  };

  useEffect(() => {
    validateInputs();
  }, [email, password]);

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleSubmit = () => {
    const user = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(user));
    history.push('/meals');
  };


  return (
    <S.loginStyle>
      {
        pageLoading ? <Loading /> : <S.formLoginContainer>
        <S.imgsContainer>
          <S.logo src={ logo } alt="logo" />
          <S.tomate src={ tomatepicture } alt="tomate" />
        </S.imgsContainer>
        <S.inputContainer>
          <S.inputMailContainer>
            <S.inputMailAndPassword
              type="email"
              onChange={ ({ target }) => setEmail(target.value) }
              placeholder="validemail@valid.com"
              data-testid="email-input"
            />
            <S.Warning>
          <span class="material-icons" style={{color: !isValidMail ? "red" : "green"}}>
          error_outline
          </span>
        </S.Warning>
          </S.inputMailContainer>

          <S.inputMailContainer>
            <S.inputMailAndPassword
              type="password"
              placeholder="Password"
              data-testid="password-input"
              onChange={ ({ target }) => setPassword(target.value) }
            />
            <S.Warning>
          <span class="material-icons" style={{color: !isValidPassword ? "red" : "green"}}>
          error_outline
          </span>
        </S.Warning>
          </S.inputMailContainer>

          <S.loginBtn
            type="button"
            data-testid="login-submit-btn"
            onClick={ handleSubmit }
            disabled={ isDisabled }
          >
            Login
          </S.loginBtn>
        </S.inputContainer>
      </S.formLoginContainer>
      }

    </S.loginStyle>
  );
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
