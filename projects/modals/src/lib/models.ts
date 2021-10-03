export type StringOrNumber = string | number;

export interface ModalI {
  top?: StringOrNumber;
  left?: StringOrNumber;
  height?: StringOrNumber;
  width?: StringOrNumber;
  padding?: string;
}

export interface FooterI {
  submitBtn: boolean;
  cancelBtn: boolean;
  close: () => void;
  submit: () => void;
}
