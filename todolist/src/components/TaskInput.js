import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin: 30px 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.2);
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,123,255,0.4);
  }
`;

const TaskInput = ({ addTask }) => {
  const today = new Date().toISOString().split("T")[0];

  const [text, setText] = useState("");
  const [date, setDate] = useState(today);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask({ text, date });
    setText("");
    setDate(today);
  };

  return (
    <InputWrapper>
      <Row>
        <Input
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </Row>
    </InputWrapper>
  );
};

export default TaskInput;



