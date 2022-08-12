import type { ReactElement, FormEvent } from "react";
import { useCallback } from "react";
import { loginUserService } from "../../services/login-user";
import { Input } from "../Input";

export const LoginForm = (): ReactElement => {
  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    loginUserService({
      email: target.email.value,
      password: target.password.value
    })
  }, []);

  return (
    <div className="col-md-6 offset-md-3 col-xs-12">
      <h1 className="text-xs-center">Sign in</h1>
      <p className="text-xs-center">
        <a href="/register">Need an account?</a>
      </p>
      <form onSubmit={handleOnSubmit}>
        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />

        <button className="btn btn-lg btn-primary pull-xs-right">
          Sign in
        </button>
      </form>
    </div>
  );
};
