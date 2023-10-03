'use client'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, setTitle]= useState('')
  const [desc, setDesc]= useState('')
  const [mainTask, setmainTask] = useState([])

  const submitHandler=((e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
   setTitle('')
   setDesc('')
  })

  let renderTask = <h2>No task available</h2>

  const deleteTask = (i)=>{
let cpyTask =[...mainTask]
cpyTask.splice(i,1)
setmainTask(cpyTask)
  }


  if(mainTask.length > 0){
  renderTask = mainTask.map((t, i)=>{
  return (
  <li key={i} className='flex items-center justify-between mb-8'>
  <div className="text-xl font-semibold flex justify-between mb-5 w-2/3">
  <h5 className="text-lg font-medium">{t.title}</h5>
  <h6>{t.desc}</h6>
  </div>
  <button onClick={()=>{deleteTask(i)}} className="bg-red-400 text-white px-4 py-2 rounded border-bold">Delete</button>
  </li>)
  })}


  

  return (
    <>
   <h1 className="bg-black text-white p-5 text-xl font-bold text-center">Urvish's todo list</h1>

   <form onSubmit={submitHandler}>
    <input type="text" name="" id="" className='border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter task here' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <input type="text" name="" id="" className='border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter description here' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
    <button className="bg-black text-white px-4 py-3 text-xxl font-bold rounded">Add Task</button>
   </form>
   <hr />

   <div className='p-8 bg-slate-200'>
<ul>
{renderTask}
</ul>
   </div>
   </>
  )
}

export default page;