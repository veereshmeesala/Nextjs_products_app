import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductsList from "../../../pages/products/index.jsx";

jest.mock('reset-css');
describe("Products page", () => {
    it("renders Products List", () => {
        render(<ProductsList />);
    });
});