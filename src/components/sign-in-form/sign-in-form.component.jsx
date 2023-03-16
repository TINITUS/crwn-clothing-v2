import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer} from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();

    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found");
      } else {
        alert("User login encountered an error");
        console.error(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const singInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer >
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
          autocomplete="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
          autocomplete="current-password"
        />
        <ButtonsContainer >
          <Button type="submit">Sing In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={singInWithGoogle}>
            Google Sing In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SingInForm;
