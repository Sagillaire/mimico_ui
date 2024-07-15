import { FC } from "react";
import {
  RadioButton,
  RadioContainer,
  RadioContent,
  RadioLabel,
  RadioSelected,
} from "./styled";
import { ICheckbox } from "./types";
import { useRadio } from "./useRadio";

export const Checkbox: FC<ICheckbox> = ({
  options,
  onChange,
  radioMode = "row",
}) => {
  const { selected, handleSelect } = useRadio(onChange);

  return (
    <RadioContainer radioMode={radioMode}>
      {options?.map(({ label, value }) => (
        <RadioContent key={`option-${label}-${value}`}>
          <RadioButton onPress={() => handleSelect(value)}>
            {selected === value && <RadioSelected />}
          </RadioButton>
          <RadioLabel>{label}</RadioLabel>
        </RadioContent>
      ))}
    </RadioContainer>
  );
};
