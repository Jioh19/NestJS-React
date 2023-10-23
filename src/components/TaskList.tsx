import { useEffect, useState } from "react"
import { getTaskRequest } from "../api/tasks"
import { Task } from "../interfaces/task.interface";
import TaskItem from "./TaskItem";


function TaskList() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data))
  }, [])

  return (
    <div>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id} />
        ))
      }
    </div>
  )
}

export default TaskList