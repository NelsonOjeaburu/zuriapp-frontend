import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "./App";

beforeEach(() => {
  global.fetch = vi.fn(() => Promise.reject(new Error("no backend in test")));
});

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });
});
