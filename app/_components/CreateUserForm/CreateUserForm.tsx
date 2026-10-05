"use client";

import { FC, SubmitEvent, useState } from "react";
import z from "zod";

type CreateUserFormProps = {
  createUser: (formData: FormData) => void;
};

const CreateUserForm: FC<CreateUserFormProps> = (props) => {
  const { createUser } = props;
  const [error, setError] = useState<null | string>(null);
  const zodScheme = z.object({
    name: z.string({ error: "Некорректный никнейм" }),
    email: z.email({ error: "Некорректный email" }),
  });

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("name"));
    const rawData = Object.fromEntries(formData.entries());
    const res = zodScheme.safeParse(rawData);
    if (!res.success) {
      setError("Ошибка");
      return console.log(res.error.issues);
    }
    
    return createUser(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input type="text" name="name" id="name" placeholder="name" />
      </label>
      <label htmlFor="email">
        <input type="text" name="email" id="email" placeholder="email" />
      </label>
      <input type="submit" value="Send" />
      {error && <p>Error</p>}
    </form>
  );
};

export default CreateUserForm;
