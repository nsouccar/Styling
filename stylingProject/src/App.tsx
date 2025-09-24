import Task from "./Task.tsx"
import data from "./task_list.ts"
import { useState } from 'react'
import type { TaskType } from './TaskType.tsx'





export default function App() {

    const thingsToDo: TaskType[] = Array.from(data) as TaskType[];

    let completedTasks: TaskType[] = []
    let uncompletedTasks: TaskType[] = []


    for (let i = 0; i < thingsToDo.length; i++) {
        let task = thingsToDo[i]

        if (task.completed) {

            completedTasks.push(task)
        } else {
            uncompletedTasks.push(task)
        }

        console.log("comp")

    }


    const [tasks, setTasks] = useState(thingsToDo)

    return (

        <div className="flex flex-col gap-10 bg-[#d8d8d87f] h-screen w-screen m-0 font-(family-name:--v) ">
            <h1 className="mt-10  ml-20 text-7xl">Task</h1>
            {completedTasks.map((task: TaskType, index: number) => (
                <Task  {...task} key={index} />))
            }
            {uncompletedTasks.map((task: TaskType, index: number) => (
                <Task  {...task} key={index} />))
            }


        </div>


    )

}

