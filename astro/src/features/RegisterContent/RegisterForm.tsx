import type { FormEvent } from "react";
import { useCallback } from "react";
import { registerUserService } from "../../services/register-user";
import { Input } from "../../components/Input";

export const RegisterForm = () => {
  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };
    registerUserService({
      username: target.username.value,
      email: target.email.value,
      password: target.password.value,
    });
  }, []);

  return (
    <div className="col-md-6 offset-md-3 col-xs-12">
      <h1 className="text-xs-center">Sign up</h1>
      <p className="text-xs-center">
        <a href="/login">Have an account?</a>
      </p>
      <form onSubmit={handleOnSubmit}>
        <Input type="text" name="username" placeholder="Your Name" />
        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />

        <button className="btn btn-lg btn-primary pull-xs-right">
          Sign up
        </button>
      </form>
    </div>
  );
};
