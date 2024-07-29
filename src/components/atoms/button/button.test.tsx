import { render, screen } from "@testing-library/react";
import { useTranslations } from "next-intl";

import Button from ".";

describe("atoms/Button ", () => {
  it("should render button with correct children", () => {
    render(<Button>children prop+</Button>);
    // screen.debug();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("children");
  });

  it("should render button with loading amd btn is disabled", () => {
    render(<Button loading>children </Button>);
    // screen.debug();
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(/load/i);

    expect(button).toHaveAttribute("disabled");
  });

  it("should render button with icon", () => {
    render(<Button icon={<svg>icon</svg>}>children</Button>);
    // screen.debug();

    const button = screen.getByRole("button");

    const icon = button.querySelector("svg");

    expect(icon).toBeInTheDocument();
  });

  it("should render button with only icon", () => {
    render(
      <Button onlyIcon icon={<svg>icon</svg>}>
        children
      </Button>,
    );
    // screen.debug();

    const button = screen.getByRole("button");
    const icon = button.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(button).not.toHaveTextContent("children");
  });
});
