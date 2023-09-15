import { Button as ArkButton, type ButtonProps } from "./base/Button";

export default function Button(props: ButtonProps) {
  console.log(props);
  return (
    <ArkButton bg={"indigo.400"} color={"white"} {...props}>
      {props.children}
    </ArkButton>
  );
}
