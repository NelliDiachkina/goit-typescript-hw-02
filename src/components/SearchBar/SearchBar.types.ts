export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface FormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}
