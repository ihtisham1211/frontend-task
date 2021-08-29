import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  CustomButton,
  CustomInput,
} from "../shared/styledComponents";
import { useHistory } from "react-router-dom";

export default function CreateTask() {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleOnClick = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      tasks.push({ id: uuid(), name: value });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      const initTasks = [{ id: uuid(), name: value }];
      localStorage.setItem("tasks", JSON.stringify(initTasks));
    }
    history.push("/list-tasks");
  };

  return (
    <Container>
      <CustomInput
        placeholder="Enter Task Name..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <CustomButton onClick={handleOnClick}>Add Task</CustomButton>
    </Container>
  );
}
