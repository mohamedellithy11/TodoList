<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">
     <div class="perant-text">
       <div class="text">{{ task.content }}</div>
     </div>
      <div class="buttons">
        <button class="Done" @click="toggleDone">
          {{ task.done ? "Undo" : "Done" }}
        </button>
        <button class="delete" @click="RemoveTask">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    toggleDone() {
      this.$store.commit("ToggleTask", this.task);
    },
    RemoveTask() {
      this.$store.commit("Removetask", this.task);
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  width: 500px;
  min-width: fit-content;
  margin: auto;
  height: 70px;
  border-radius: 9px;
  background-color: rgba(13, 13, 75, 0.678);
  margin-top: 30px;
}
@media(max-width:600px){
  .content{
    width: 300px;
  }
}
.content .text {
  margin-left: 20px;
  margin-top: 23px;
  font-size: 20px;
  color: white;
}
@media(max-width:600px){
   .content .text{
    font-size: 17px;
    margin-left: 5px;
  }
}

.content .buttons {
  margin-right: 20px;
  margin-top: 15px;
}
@media(max-width:600px){
   .content .buttons{
    margin-right: 5px;
  }
}

.content .buttons .Done {
  cursor: pointer;
  font-size: 17px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 9px;
  width: 75px;
  height: 40px;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 20px;
}
@media(max-width:600px){
  .content .buttons .Done {
    width: 50px;
    height: 30px;
    font-size: 14px;
  }
}
.content .buttons .delete {
  cursor: pointer;
  font-size: 17px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 9px;
  width: 75px;
  height: 40px;
  font-weight: bold;
}
@media(max-width:600px){
  .content .buttons .delete{
    width: 50px;
    height: 30px;
    font-size: 14px;
  }
}
</style>
