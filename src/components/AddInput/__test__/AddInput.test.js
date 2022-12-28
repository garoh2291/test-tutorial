import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const MockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element ", () => {
    render(<AddInput todos={[]} setTodos={MockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={MockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, { target: { value: "changed" } });
    expect(inputElement.value).toBe("changed");
  });

  it("should have empty input when button is clicked", () => {
    render(<AddInput todos={[]} setTodos={MockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "changed" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
