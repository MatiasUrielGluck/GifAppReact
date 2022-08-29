import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifAppReact = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (
      categories.find(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif App React</h1>

      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
