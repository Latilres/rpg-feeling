type Props = {
  buttonText: string;
  disabled?: boolean;
};

const CategoryButton = ({ buttonText }: Props) => {
  return <button>{buttonText}</button>;
};

export default CategoryButton;
