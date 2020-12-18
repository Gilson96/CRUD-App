import React, { useContext } from "react";
import { TaskListContext } from "../../Context/TaskListContext";
import { Todo } from "../Todo/Todo";

export const TodoList = () => {

    const { tasks } = useContext(TaskListContext);

    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Todo task={task} key={task.id} />;
                    })}
                </ul>
            ) : (
                    <div className="no-tasks">No Tasks</div>
                )}
        </div>
    );
};
