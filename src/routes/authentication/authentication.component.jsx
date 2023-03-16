import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
	

	return ( 
		<AuthenticationContainer>
			<SingInForm />
			<SignUpForm />
		</AuthenticationContainer>
	)
};

export default Authentication; 
