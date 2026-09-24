"use client";

import { useState } from "react";

const ShowEmailBtn = ({ email }: { email: string }) => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <div>
      <button onClick={() => setShowEmail((prev) => !prev)}>Show email</button>
      <p>email:{showEmail && email}</p>
    </div>
  );
};

export default ShowEmailBtn;
