import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const TaskItem = styled.li`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 16px 20px;
  margin-bottom: 16px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  transition: 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TaskText = styled.span`
  font-size: 1rem;
  line-height: 1.4;
  strong {
    font-weight: 600;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (min-width: 500px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  padding: 8px 14px;
  font-size: 0.9rem;
  background: ${({ type }) =>
    type === "edit"
      ? "#ffc107"
      : type === "save"
      ? "#28a745"
      : "linear-gradient(135deg, #ff5e5e, #ff3c3c)"};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

const Input = styled.input`
  padding: 8px 10px;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  max-width: 240px;
`;

const NoTasks = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-top: 30px;
  font-size: 1.1rem;
  opacity: 0.7;
`;

const TaskList = ({ tasks, deleteTask, updateTask, filter }) => {
  const today = new Date().toISOString().split("T")[0];
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");

  const filteredTasks = tasks.filter(({ date }) => {
    if (filter === "Today") return date === today;
    if (filter === "Upcoming") return date > today;
    return true;
  });

  const startEdit = (index, task) => {
    setEditIndex(index);
    setEditText(task.text);
    setEditDate(task.date);
  };

  const saveEdit = (index) => {
    if (!editText.trim()) return;
    updateTask(index, { text: editText, date: editDate });
    setEditIndex(null);
    setEditText("");
    setEditDate("");
  };

  return (
    <List>
      {filteredTasks.length === 0 && <NoTasks>No tasks here 😎</NoTasks>}
      {filteredTasks.map((task, index) => {
        const actualIndex = tasks.findIndex(
          (t) => t.text === task.text && t.date === task.date
        );

        return (
          <TaskItem key={index}>
            {editIndex === actualIndex ? (
              <>
                <Input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <Input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
              </>
            ) : (
              <TaskText>
                📌 <strong>{task.text}</strong> <br />
                📅 {task.date}
              </TaskText>
            )}
            <ButtonGroup>
              {editIndex === actualIndex ? (
                <Button type="save" onClick={() => saveEdit(actualIndex)}>
                  Save
                </Button>
              ) : (
                <Button type="edit" onClick={() => startEdit(actualIndex, task)}>
                  Edit
                </Button>
              )}
              <Button onClick={() => deleteTask(actualIndex)}>Delete</Button>
            </ButtonGroup>
          </TaskItem>
        );
      })}
    </List>
  );
};

export default TaskList;

