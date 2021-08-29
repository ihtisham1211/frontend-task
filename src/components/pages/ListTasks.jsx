import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import { ContainerColumn } from "../shared/styledComponents";

export default function ListTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);
  return (
    <ContainerColumn>
      {tasks.map((item) => (
        <Card key={item.id} id={item.id} name={item.name} />
      ))}
    </ContainerColumn>
  );
}
