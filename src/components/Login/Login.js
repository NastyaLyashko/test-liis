import '../Login/Login.css';
import { useFormWithValidation } from '../Validation/Validation';

function Login ({ onLogin }) {

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(formValidation.values);
    }

    const formValidation = useFormWithValidation();

    return (
        <section className="form form_login">
            <div className='form__background'></div>
            <form onSubmit={handleSubmit} className="container form__container form__container_login" name='loginForm' noValidate>
                <h3 className="form__title">Simple Hotel Check</h3>
                <label className="form__field">
                    <span className={`${formValidation.errors.login ? "form__field-text_invalid" : ""} form__field-text form__field-text_login`}>Логин</span>
                    <input  value={formValidation.values.login} onChange={formValidation.handleChange}
                            className={`${formValidation.errors.login ? "form__input_invalid" : ""} form__input`}
                            type="email" 
                            name="login" 
                            maxLength="40" 
                            required />
                    <span className="form__error" id="login-error">{formValidation.errors.login}</span>
                </label>
                <label className="form__field">
                    <span className={`${formValidation.errors.password ? "form__field-text_invalid" : ""} form__field-text form__field-text_login`}>Пароль</span>
                    <input  value={formValidation.values.password} onChange={formValidation.handleChange}
                            className={`${formValidation.errors.password ? "form__input_invalid" : ""} form__input`}
                            type="text" 
                            name="password" 
                            id="password"
                            pattern="^[a-zA-Z0-9]+$"
                            minLength="8" 
                            maxLength="20"
                            required />
                    <span className="form__error" id="password-error">{formValidation.errors.password}</span>
                </label>
                <button type="submit" className={`${formValidation.isValid ? "form__button_active" : ""} form__button` } disabled={`${formValidation.isValid ? "" : "disabled"}`}>Войти</button>
            </form>
        </section>
    )
}

export default Login;