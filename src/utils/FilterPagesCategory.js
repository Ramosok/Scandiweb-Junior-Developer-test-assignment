export const FilterPagesCategory = (categoryList, pathName) =>
  categoryList?.find((item) => item.name === `${pathName}`);
