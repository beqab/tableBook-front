import { render, screen } from "@testing-library/react";
import { useTranslations } from "next-intl";

import Banner from ".";

vi.mock("next-intl", async () => {
  const actual = (await vi.importActual("next-intl")) as any;

  return {
    ...actual,
    useTranslations: vi.fn(),
  };
});

describe("Banner", () => {
  it("should", () => {
    vi.mocked(useTranslations).mockImplementation(
      (namespace?: "Index"): any => {
        const translations = {
          Index: { bannerText: "Welcome to the Banner" },
        };
        return (key: keyof (typeof translations)["Index"]) =>
          translations[namespace ?? "Index"][key];
      },
    );

    render(<Banner />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Welcome to the Banner");
  });
});
