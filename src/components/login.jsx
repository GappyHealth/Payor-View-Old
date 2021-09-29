import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <h1 className="navbar-brand" to="/">
          Gappy
        </h1>
        <div className="navbar-nav ml-auto">
          <button
            className="btn btn-primary btn-sm"
          >
            Product Page
          </button>
        </div>
      </nav>
      <div className="Login">
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <p className="errorMsg">{emailError}</p>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <p className="errorMsg">{passwordError}</p>
          {hasAccount ? (
            <>
              <Button block size="lg">
                Sign Up
              </Button>
              <p>
                Have an Account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          ) : (
            <>
              <Button block size="lg" onClick={handleLogin}>
                Sign in
              </Button>
              <p>
                Don't have an Account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          )}
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Login;
