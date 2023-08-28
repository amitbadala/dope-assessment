import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SampleForm from "./form";

describe("SampleForm", () => {
  it("should update input values when user types", async () => {
    render(<SampleForm />);

    // Find the input elements
    const appNameInput = screen.getByLabelText(/App Name/i);
    const volumeInput = screen.getByLabelText(/Volume/i);

    // Simulate user typing
    await userEvent.type(appNameInput, "Test App");
    await userEvent.type(volumeInput, "123");

    expect(appNameInput.value).toBe("Test App");
    expect(volumeInput.value).toBe("123");
  });

  // You can add more tests, like checking if the form submits correctly, if the clear button works, etc.
});
