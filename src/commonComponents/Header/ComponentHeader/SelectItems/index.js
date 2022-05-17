import { memo } from "react";
import styles from "./select.module.scss";

export const SelectItems = memo(
  ({ select, currencies, getLocalStorage, selectValue }) => {
    return (
      <select
        className={styles.selectContainer}
        name={select}
        id={select}
        value={select}
        onChange={selectValue}
      >
        {currencies.currencies?.map(({ label, symbol }) => (
          <option
            defaultValue={getLocalStorage === label}
            key={label}
            value={label}
          >
            {symbol} {label}
          </option>
        ))}
      </select>
    );
  }
);
