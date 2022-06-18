interface InputProps {
  name: string;
  placeholder: string;
  value: any;
  onChange: (event: any) => void;
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  return <input placeholder={placeholder} {...rest} />;
}
