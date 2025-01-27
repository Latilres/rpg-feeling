import { useState } from "react";

type Props = {
  buttonText: string;
  disabled?: boolean;
  createScene?: (newScene: string) => void;
};

const CategoryButton = ({ buttonText, createScene }: Props) => {
  const handleOnClick = () => {
    createScene?.("newScene");
  };

  return <button onClick={() => handleOnClick()}>{buttonText}</button>;
};

export default CategoryButton;
