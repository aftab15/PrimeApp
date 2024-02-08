import React, { useState } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import FormSocialButtons from "./components/FormSocialButtons";
import { Link, useNavigate } from "react-router-dom";
import PasswordField from "./components/PasswordField";
import TextField from "./components/TextField";
import { VALIDATIONS } from "../../utils/constants";
import { apiCall } from "../../services/apis/auth/signinDummy";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setState } from "../../redux/slice/dashboardSlice";

const SignInForm = () => {
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!VALIDATIONS.EMAIL.test(email)) {
      setEmailError("Please enter a valid input");
      return;
    }
    if (password === "") {
      setPasswordError("Please enter a valid input");
      return;
    }
    if (emailError === "" && passwordError === "") {
      console.log({
        email,
        password,
      });
      setLoading(true);
      const data = await apiCall("signin200");
      setLoading(false);
      console.log(data);
      dispatch(
        setState({
          user: {
            role: 200,
          },
        })
      );
      navigate(from, { replace: true });

      //If error from server
      // setEmailError(" ");
      // setPasswordError("Bad credentials");
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form onSubmit={handleSubmit} className="w-full grid gap-6">
          <FormHeader
            heading="Sign In"
            subheading="Don’t have an account?"
            link="/signup"
            linktext="Sign up"
          />
          <div className="Inputs grid gap-4">
            {/* Email */}
            <TextField
              Label="Email"
              Text={email}
              setText={setEmail}
              error={emailError}
              setError={setEmailError}
            />
            <PasswordField
              Label="Password"
              Password={password}
              setPassword={setPassword}
              error={passwordError}
              setError={setPasswordError}
            />
          </div>
          <div className="RememberMeForgotPassword flex justify-between items-center text-sm font-medium">
            <div className="form-group flex items-center gap-2 select-none text-gray-500">
              <input
                type="checkbox"
                className="rounded bg-gray-50 border border-gray-300"
                id="RememberMeChk"
              />
              <label htmlFor="RememberMeChk">Remember me</label>
            </div>
            <Link replace to="/forgotpassword" className="text-blue-600 ">
              Forgot password?
            </Link>
          </div>

          <button
            className={classNames("SubmitBtn  bg-Fire-Opal-500 hover:bg-Fire-Opal-600", {
              "border border-gray-200 bg-white text-gray-900 text-xs hover:bg-white":
                Loading,
            })}
          >
            {Loading ? "Signing in" : "Submit"}
          </button>
          <Seperator />
          <FormSocialButtons />
          <FormHelpText
            text={"Need help? Contact"}
            link={"/signup"}
            linktext={"support@smarteinc.com"}
          />
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export const Seperator = () => {
  return (
    <div className="separator flex justify-center items-center self-stretch gap-6">
      <div className="separator-1 h-px bg-gray-200 flex-grow" />
      <div className="text-gray-500 text-center text-base font-medium">
        Or continue with
      </div>
      <div className="separator-2 h-px bg-gray-200 flex-grow" />
    </div>
  );
};
export default SignInForm;
