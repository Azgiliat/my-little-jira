import React, { PropsWithChildren } from 'react';

export function LoginErrors(props: PropsWithChildren<{ errors: string[] }>) {
  const LoginError = (props: PropsWithChildren<{ error: string }>) => {
    return <p className="text-red-500 text-center">{props.error}</p>;
  };

  return (
    <ul className="mb-5">
      {props.errors.map((error) => (
        <li className="mx-auto w-1/2" key={error}>
          <LoginError error={error} />
        </li>
      ))}
    </ul>
  );
}
