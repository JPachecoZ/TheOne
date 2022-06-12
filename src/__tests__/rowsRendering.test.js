import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Row from "../components/Row";

test("title is rendered correctly as Books", () => {
  let mockData = {
    name: "BOOKS",
    data: [
      {
        id: 1,
        name: "The Fellowship Of The Ring"
      },
      {
        id: 2,
        name: "The Two Towers"
      }
    ]
  }
  render(<Row title={mockData.name} data={mockData.data} />);

  expect(screen.getByRole("h1")).toHaveTextContent("BOOKS");
});