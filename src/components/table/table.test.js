import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./table";
import { columnsConfig } from "../../constant/app-usage-config";

describe("Table", () => {
  it("should display data correctly", () => {
    const mockData = [
      {
        id: "1",
        name: "Naruto",
        location: "konoha",
        health: "Healthy",
        ip: "192.173.23",
        volume: 1000000000,
      },
      {
        id: "2",
        name: "Sasuke",
        location: "Orochimaru Hidden Village",
        health: "Error",
        ip: "111.2121.121",
        volume: 300000000,
      },
    ];

    render(
      <Table
        columns={columnsConfig}
        data={mockData}
        isLoading={false}
        error={null}
      />
    );

    // Assert that the data is displayed correctly
    mockData.forEach((entry) => {
      Object.keys(entry).forEach((key) => {
        expect(screen.getByText(entry[key])).toBeInTheDocument();
      });
    });
  });

  it("should display spinner when isLoading is true", () => {
    render(
      <Table columns={columnsConfig} data={[]} isLoading={true} error={null} />
    );

    // Spinner has a role status
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  // You can add more tests, like checking for error messages, etc.
});
