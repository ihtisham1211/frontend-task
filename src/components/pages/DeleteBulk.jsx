import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import { ContainerColumn, CustomButton } from "../shared/styledComponents";

export default function DeleteBulk() {
  const [deleteList, setDeleteList] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  const handleDeleteIds = (id) => {
    if (deleteList.indexOf(id) !== -1) {
      const newdeletedList = deleteList.filter((item) => {
        if (id !== item) {
          return item;
        }
      });
      setDeleteList(newdeletedList);
    } else {
      setDeleteList([...deleteList, id]);
    }
  };

  const handleDeleteTask = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    deleteList.forEach((id) => {
      tasks = tasks.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
    });
    setTasks(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <>
      <ContainerColumn>
        <CustomButton onClick={handleDeleteTask}>Delete checked</CustomButton>
        {tasks.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            del={true}
            handleDeleteIds={handleDeleteIds}
          />
        ))}
      </ContainerColumn>
    </>
  );
}
