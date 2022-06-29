import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {isLoading && <h3>Loading. . .</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h3>{todo.id}</h3>
                <h3>{todo.user_id}</h3>
                <h3>{todo.title}</h3>
                <h3>{todo.completed}</h3>
              </article>
            );
          })}
      </section>
    </div>
  );
};

// todos.map((todo) => {
//   return (
//     <article>
//       <h4>{todo.userId}</h4>
//       <h4>{todo.id}</h4>
//       <h4>{todo.title}</h4>
//       <h4>{todo.completed}</h4>
//     </article>
//   );
// });

export default Todos;
