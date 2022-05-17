import { memo } from "react";

import { LinkItems } from "../LinkItems";

import styles from "./navbar.module.scss";

export const NavBar = memo(({ categories }) => {
  return (
    <div className={styles.navbar_container}>
      {categories.categories?.map(({ name }) => (
        <LinkItems key={name} name={name} />
      ))}
    </div>
  );
});
