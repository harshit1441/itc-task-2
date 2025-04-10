import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import DarkModeToggle from "./components/DarkModeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";

// 🎨 Theme Definitions
const lightTheme = {
  background: "#fefefe",
  text: "#1a1a1a",
  card: "#ffffff",
  border: "#e0e0e0",
};

const darkTheme = {
  background: "#121212",
  text: "#f5f5f5",
  card: "#1f1f1f",
  border: "#333333",
};

// 🌐 Layout Container
const AppContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 2rem 1rem;
  transition: all 0.3s ease;
  max-width: 800px;
  margin: 0 auto;
`;

// 🧢 Header Styling
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #007bff, #00c6ff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const App = () => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, updatedTask) => {
    const updated = [...tasks];
    updated[index] = updatedTask;
    setTasks(updated);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <h1>Task Manager</h1>
          <DarkModeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </Header>

        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
          filter={activeTab}
        />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;