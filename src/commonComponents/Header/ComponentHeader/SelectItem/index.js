import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  Arrow,
} from "./styledCompSel";

export const SelectItem = ({
  currencies,
  selectedOption,
  getSymbol,
  isOpen,
  toggling,
  onOptionClicked,
}) => {
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {getSymbol && getSymbol[selectedOption]}
        <Arrow isOpen={isOpen}> </Arrow>
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {currencies.currencies?.map(({ label, symbol }) => (
            <ListItem onClick={onOptionClicked(label)} key={label}>
              {symbol} {label}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
