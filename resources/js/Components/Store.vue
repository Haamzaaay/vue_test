<template>
    <div class="row">
      <div class="col-md-12 main_div">
        <h2 >The Store Example with color {{ $store.state.color }} </h2>
        <h1>Add the task from here with getter as {{ $store.getters.GetUpperColor }}</h1>
        <small> Your total tasks right now is {{ TasksCount }} !</small>
        <br />
        <label for="task">Task </label>
        <input
          type="text"
          class="form-control"
          placeholder="task"
          name="task"
          style="background-color: black; color: white"
          v-model="tasks"
        />
        <button class="btn btn-primary" @click="AddTask">Add Task</button>
        <button class="btn btn-primary" @click="$store.dispatch('GetRandomColor')">Change Color</button>

      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, index) in $store.state.tasksArray" :key="value.id">
              <th scope="row">{{ value.id }}</th>
              <td>{{ value.name }}</td>
       
              <td>
                <button class="btn btn-danger" @click="DeleteTask(value.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <style>

  </style>
<script>


import { ref } from "vue";



export default ({
    mounted(){
    
    },
    setup() {
        let color=ref("blue");
        let tasks=ref("news");
        let tasksArray=ref([
      {
        id: 0,
        title: "Home",
      },
      {
        id: 1,
        title: "Doctor",
      },
    ]);
  
  function AddTask(){
        console.log("AddTask clicked");

    }



    return {
        tasksArray,
        tasks,
        color,
        AddTask,
    };
    },
})
</script>
