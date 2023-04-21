import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Todo } from './models/Todo';
import { TodoItem } from './components/TodoItem';
import { TestForm } from '../src/components/TestForm';

//Arrange Act Assert
test('TodoItem renders todo item properly', () => {
  //Arrange
  let todoItem:Todo = {
    id:1,
    name: "Clean the Kitchen",
    isDone: false
  }
  render(<TodoItem todo={todoItem} onDone={() => {}} />);

  const task = screen.getByText('Clean the Kitchen');

  expect(task).toBeInTheDocument();
});

test('Done button displays', () => {
  //Arrange
  let todoItem:Todo = {
    id:1,
    name: "Clean the Kitchen",
    isDone: false
  }
  render(<TodoItem todo={todoItem} onDone={() => {}} />);

  const doneButton = screen.getByRole('button', {name: "Done"});

  expect(doneButton).toBeInTheDocument();
});

test('todoItem has done class when marked done', () => {
  let todoItem:Todo = {
    id:1,
    name: "Clean the Kitchen",
    isDone: true
  }

  const { container } = render(<TodoItem todo={todoItem} onDone={() => {}}></TodoItem>);

  const componentElement = container.firstChild;

  expect(componentElement).toHaveClass('Done');
});

test('todoItem does not have class when marked done', () => {
  let todoItem:Todo = {
    id:1,
    name: "Clean the Kitchen",
    isDone: false
  }

  const { container } = render(<TodoItem todo={todoItem} onDone={() => {}}></TodoItem>);

  const componentElement = container.firstChild;

  expect(componentElement).not.toHaveClass('Done');
});

test('When user clicks done button, todo set to done', () => {
  let todoItem:Todo = {
    id:1,
    name: "Clean the Kitchen",
    isDone: false
  }

  //mock function
  const spy = jest.fn();

  render(<TodoItem todo={todoItem} onDone={spy}></TodoItem>);

  const btn = screen.getByRole('button', {name:"Done"});

  fireEvent.click(btn);

  expect(spy).toHaveBeenCalled();
});

test('', () => {
  render(<TestForm />);

  const element = screen.getByRole('textbox', {name: "firstName"});

  expect(element).toBeInTheDocument();
})