import { AddTodo } from "./AddTodo";
import Adapter from "enzyme-adapter-react-15";
import React from "react";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("addTodo", () => {
  it("Should add todo to the list", () => {
    const todos = [
      {
        id: 1,
        text: "Test 1",
        done: false,
        priority: 1
      },
      {
        id: 2,
        text: "Test 2",
        done: false,
        priority: 2
      }
    ];

    const newTodo = {
      id: 3,
      text: "Test 3",
      done: false,
      priority: 3
    };

    const expected = [
      {
        id: 1,
        text: "Test 1",
        done: false,
        priority: 1
      },
      {
        id: 2,
        text: "Test 2",
        done: false,
        priority: 3
      },
      {
        id: 3,
        text: "Test 3",
        done: false,
        priority: 3
      }
    ];

    const wrapper = mount(<AddTodo onAddTodoHandler={newTodo} />);
    const p = wrapper.find("div");
    expect(p).toEqual(expected[0].id);
  });
});
