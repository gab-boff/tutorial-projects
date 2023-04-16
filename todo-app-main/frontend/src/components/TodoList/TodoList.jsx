import React from "react";
import axios from "../../axios";

import { Container, ListContainer, Row, Text } from "./styles";

function TodoList({ todos, fetchData }) {
  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <ListContainer>
        {todos?.map((todo) => {
          return (
            <Row key={todo.text}>
              <Text
                onClick={() => updateTodo(todo._id)}
                isCompleted={todo.completed}
              >
                {todo.text}
              </Text>
              <Text onClick={() => deleteTodo(todo._id)}>X</Text>
            </Row>
          );
        })}
      </ListContainer>
    </Container>
  );
}

export default TodoList;
