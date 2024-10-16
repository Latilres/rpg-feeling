type Props = {
  buttonText: string;
  disabled?: boolean;
};

const CategoryButton = ({ buttonText, disabled = false }: Props) => {
  const styles = `m-2 font-semibold rounded text-stone-900 ${
    disabled
      ? "bg-indigo-600 hover:bg-indigo-700 cursor-default"
      : "bg-amber-400 hover:bg-amber-500"
  } w-32 h-48`;
  return <button className={styles}>{buttonText}</button>;
};

export default CategoryButton;
