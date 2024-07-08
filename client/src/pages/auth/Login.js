import React from "react";
import InputType from "../../components/shared/Form/InputType";

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="login"></img>
        </div>
        <div className="col-md-4 form-container">
          <form>
            <InputType
              labelText={"Email"}
              labelFor={"ForMail"}
              inputType={"email"}
              name={"email"}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
