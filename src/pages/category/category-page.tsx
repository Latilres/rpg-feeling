import CategoryButton from "./category-button";

const CategoryPage = () => {
  return (
    <div className="category-page justify-center">
      <span className="text-xl font-bold category-title flex pt-6 items-center justify-center">
        Fantasy
      </span>
      <div className="items-centre p-4 w-fit">
        <CategoryButton buttonText="Create" disabled />
        <CategoryButton buttonText="Traveling" />
        <CategoryButton buttonText="The druids home" />
        <CategoryButton buttonText="Silvershore" />
      </div>
    </div>
  );
};

export default CategoryPage;
