import type { ReactElement } from 'react';
import { ActionFunction, json, redirect } from '@remix-run/node';
import { Form, Link, useActionData, useCatch } from '@remix-run/react';
import { registerUserService } from '~/services/register-user.service';
import { Input } from '~/components/Input';

type ActionData =
  | {
      username?: null | string;
      email?: null | string;
      password?: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  const errors: ActionData = {
    username: username ? null : 'username is required',
    email: email ? null : 'email is required',
    password: password ? null : 'password is required',
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors, { status: 400 });
  }

  await registerUserService({
    path: '/users',
    method: 'POST',
    data: {
      user: { username, email, password },
    },
  });
  return redirect('/login');
};
export default function RegisterContainer(): ReactElement {
  const errors = useActionData<ActionData>();

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login" prefetch="intent">
                Have an account?
              </Link>
            </p>

            <Form method="post">
              <Input type="text" name="username" placeholder="Your Name" required />
              <Input type="text" name="email" placeholder="Email" required>
                {errors?.email ? <p className="error-messages">{errors.email}</p> : null}
              </Input>
              <Input type="password" name="password" placeholder="Password" required />

              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign up
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login" prefetch="intent">
                Have an account?
              </Link>
            </p>
            <div className="error-messages">
              <p>{error.message}</p>
            </div>
            <Form method="post">
              <Input type="text" name="username" placeholder="Your Name" />
              <Input type="text" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />

              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign up
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <>
      <div>
        <p>
          ERROR: {caught.statusText} {caught.status}
        </p>
      </div>
      <div>{caught.data.message}</div>
    </>
  );
}
