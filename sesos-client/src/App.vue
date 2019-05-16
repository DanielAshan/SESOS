<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <app-register></app-register>
      <app-classroom></app-classroom> 
      <app-lecture></app-lecture>
      <app-user></app-user>
      <app-attendance></app-attendance>
    </div>
  </div>
</template>

<script>
import Header from "./components/Shared/Header";
import ClassroomList from "./components/Classroom/ClassroomList";
import LectureList from "./components/Lecture/LectureList";
import AttendanceList from "./components/Lecture/AttendanceList"
import UserList from "./components/User/UserList";
import UserRegister from "./components/User/UserRegister"
export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-classroom": ClassroomList,
    "app-lecture": LectureList,
    "app-user": UserList,
    "app-register": UserRegister,
    "app-attendance": AttendanceList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
