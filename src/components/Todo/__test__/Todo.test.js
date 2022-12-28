import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("----", () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputElement, { target: { value: "Go somewhere" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go somewhere/i);
    expect(divElement).toBeInTheDocument();
  });

  it("----", () => {
    render(<MockTodo />);

    addTask(["go somewhere", "go somewhere 2", "go somewhere3"]);
    const divElement = screen.getAllByTestId(/task-container/i);
    expect(divElement.length).toBe(3);
  });

  it("----", () => {
    render(<MockTodo />);

    addTask(["Go somewhere"]);
    const divElement = screen.getByText(/Go somewhere/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("----", () => {
    render(<MockTodo />);

    addTask(["Go somewhere"]);
    const divElement = screen.getByText(/Go somewhere/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
