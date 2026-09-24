"use client";

const DeleteBtn = ({ deleteFunc }: { deleteFunc: () => Promise<void> }) => {
  return (
    <button className="" onClick={deleteFunc}>
      Delete user
    </button>
  );
};

export default DeleteBtn;
