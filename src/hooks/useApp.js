/**
 * useApp
 */

import React from "react";
/* constants */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data.js";

/**
 *
 * @returns
 */
export const useApp = () => {
  /* state */
  /* todo list */
  const [todoList, setTodoList] = React.useState(INIT_TODO_LIST);
  /* add input value */
  const [addInputValue, setAddInputValue] = React.useState("");
  /* 採番用ID */
  const [uniqueId, setUniqueId] = React.useState(INIT_UNIQUE_ID);

  /* stateを変更する関数 */
  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    const nestUniqueId = uniqueId + 1;
    //エンターキーかつaddInputValueが空文字でない時
    if (event.key === "Enter" && addInputValue !== "") {
      const newTodoList = todoList.concat({
        id: nestUniqueId,
        title: addInputValue,
      });
      setTodoList(newTodoList);
      //uniqueIDをインクリメント
      setUniqueId(nestUniqueId);
      //addInputValueをリセット
      setAddInputValue("");
    }
  };

  /* 削除機能 */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`${targetTitle}を削除しますか？`)) {
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== targetId;
      });
      setTodoList(newTodoList);
    }
  };

  //returnで呼び出し側に状態と関数を渡す。
  //状態を第1引数　　関数を第2引数として返す
  return [
    {
      todoList,
      addInputValue,
    },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
    },
  ];
};
