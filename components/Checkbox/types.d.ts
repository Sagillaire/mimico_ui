export interface ICheckbox {
  options: ICheckboxOptions[];
  radioMode?: TRadioMode;
  onChange?: (value?: number) => void;
}

export interface ICheckboxOptions {
  label: string;
  value: number;
}

export type TRadioMode = "row" | "column";
