<template>
  <div class="landing">
    <div class="welcome-content">
      <h2>Welcome in our website</h2>
      <h1>Add your Task</h1>

    </div>
    <div class="content">
      <div class="second-content">
        <input
          type="text"
          style="font-size: 25px; color: white"
          placeholder="Add a New Task"
          @keypress.enter="Tostore"
          v-model="NewTask"
        />
        <button @click="Tostore">Add</button>
      </div>
      <div class="result">
        <Task
          v-for="(task, index) in $store.state.tasks"
          :key="index"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      NewTask: "",
    };
  },
  methods: {
    Tostore() {
      if (this.NewTask) {
        this.$store.commit("Addtask", this.NewTask);
        this.NewTask = "";
      }
    },
  },
};
</script>

<style scoped>
.landing {
  height: 1000px;
  width: 100%;
}
.landing .welcome-content {
  padding: 30px;
}
body.active h2{
  color: white;
}
body.active h1{
  color: white;
}
.landing h1,
h2 {
  display: flex;
  justify-content: center;
  color: black;
}
@media(max-width:600px){
  .landing h2{
    margin-top: 60px;
  }
}
.second-content {
  display: flex;
  justify-content: center;
}
.second-content input {
  background-color: rgb(2, 2, 27);
  width: 300px;
  height: 50px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 9px;
}
@media(max-width:600px){
  .second-content input{
    width: 210px;
  }
}
.second-content input:focus {
  border-bottom-color: green;
  outline: none;
}
.second-content button {
  width: 80px;
  height: 50px;
  background-color: rgb(36, 204, 36);
  color: black;
  font-size: 25px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
