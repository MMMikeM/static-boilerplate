import { Button as AriaButton, type ButtonProps } from "react-aria-components";

import { styled } from "@ds/jsx";
import { cva, type RecipeVariantProps } from "@ds/css";

const buttonStyle = cva({
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: "md",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "semibold",
    minWidth: "0",
    justifyContent: "center",
    outline: "none",
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "background, border-color, color, box-shadow",
    transitionTimingFunction: "default",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  variants: {
    variant: {
      primary: {
        background: "primary.500",
        color: "white",
        _hover: {
          background: "primary.600",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "primary.500!",
        },
        _disabled: {
          background: "disabled.500",
          cursor: "not-allowed",
          _hover: {
            background: "disabled.500",
          },
        },
      },
      secondary: {
        borderWidth: "1px",
        borderColor: "secondary.500",
        background: "secondary.400",
        color: "white",
        _hover: {
          color: "secondary.50",
          background: "secondary.600",
        },
        _selected: {
          background: "accent.default",
          borderColor: "border.accent",
          color: "accent.fg",
          _hover: {
            color: "accent.fg",
            background: "accent.default",
            borderColor: "border.accent",
          },
        },
        _disabled: {
          borderColor: "disabled.200",
          color: "disabled.200",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            borderColor: "disabled.200",
            color: "disabled.200",
          },
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "border.outline !important",
        },
      },
      tertiary: {
        color: "fg.emphasized",
        _hover: {
          color: "fg.default",
          background: "bg.subtle",
        },
        _disabled: {
          color: "disabled.200",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            color: "disabled.200",
          },
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "border.outline !important",
        },
        _selected: {
          background: "accent.default",
          color: "accent.fg",
          _hover: {
            color: "accent.fg",
            background: "accent.default",
          },
        },
      },
      link: {
        color: "fg.muted",
        verticalAlign: "baseline",
        _hover: {
          color: "fg.default",
        },
        _disabled: {
          color: "disabled.200",
          cursor: "not-allowed",
          _hover: {
            color: "disabled.200",
          },
        },
        height: "auto!",
        px: "0!",
        minW: "0!",
      },
    },
    size: {
      xs: {
        h: "8",
        minW: "8",
        textStyle: "xs",
        px: "3",
        gap: "2",
        "& svg": {
          fontSize: "md",
          width: "4",
          height: "4",
        },
      },
      sm: {
        h: "9",
        minW: "9",
        textStyle: "sm",
        px: "3.5",
        gap: "2",
        "& svg": {
          width: "4",
          height: "4",
        },
      },
      md: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4",
        gap: "2",
        "& svg": {
          width: "5",
          height: "5",
        },
      },
      lg: {
        h: "11",
        minW: "11",
        textStyle: "md",
        px: "4.5",
        gap: "2",
        "& svg": {
          width: "5",
          height: "5",
        },
      },
      xl: {
        h: "12",
        minW: "12",
        textStyle: "md",
        px: "5",
        gap: "2.5",
        "& svg": {
          width: "5",
          height: "5",
        },
      },
      "2xl": {
        h: "16",
        minW: "16",
        textStyle: "lg",
        px: "7",
        gap: "3",
        "& svg": {
          width: "6",
          height: "6",
        },
      },
    },
  },
});

const StyledButton = styled(AriaButton, buttonStyle);

type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

export default function CustomButton(props: ButtonVariants & ButtonProps) {
  console.log("props:", props);
  return (
    <StyledButton onPress={() => alert("Hello world!")} {...props}>
      {props.children}
    </StyledButton>
  );
}
