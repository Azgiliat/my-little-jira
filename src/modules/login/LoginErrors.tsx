import React, { PropsWithChildren } from 'react';

export function LoginErrors(props: PropsWithChildren<{ errors: string[] }>) {
  return (
    <ul>
      {props.errors.map((error) => (
        <li key={error} className="text-red-500">
          <p>{error}</p>
        </li>
      ))}
    </ul>
  );
}
