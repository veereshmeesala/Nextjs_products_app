import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../pages/index.jsx";

// jest.mock('reset-css');
describe("Home page", () => {
    it("renders deals card", () => {
        render(<Home />);
    });
});