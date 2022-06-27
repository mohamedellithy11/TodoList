export default{
  state: () => ({
    tasks:[]
}),
mutations :{
  Addtask(state , task){
    state.tasks = [{content: task , done: false}, ...state.tasks]
  },
  Removetask(state , task){
      state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  ToggleTask(state ,task){
      task.done = !task.done
  }
}
}


