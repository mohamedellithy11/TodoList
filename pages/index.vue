<template>
  <div>
    <div class="container">
        <div class="toggle">
           <span @click="toggle" class="btn"></span>
        </div>
    </div>
    <Landing />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    toggle() {
      document.body.classList.toggle("active")

      //sava dark mode in local storage dont complete yet
      let theme;

      if(document.body.classList.contains("active")){
        theme = "Dark"
      }else{
        theme = "Light"
      }

      window.localStorage.setItem("color", " rgb(2, 2, 27)")

      if(theme === "Dark"){
        document.body.style.backgroundColor = window.localStorage.getItem("color")
      }else{
        document.body.style.backgroundColor = "white"
      }
    },
  },
};
</script>
<style scoped>

.container{
    position: absolute;
    top: 50px;
    left: 50px;
}
@media(max-width:600px){
  .container{
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
  }
}
.container .toggle {
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #999;
  border-radius: 20px;
  transition: 0.3s;
}
.active .toggle{
  background-color: white;
}
.active .toggle .btn{
  left: 30px;
}
.toggle .btn {
  position: absolute;
  width: 25px;
  height: 24px;
  background-color: black;
  border-radius: 30px;
  top: 3px;
  left: 3px;
  cursor: pointer;
  transition: 0.3s;
}
</style>
