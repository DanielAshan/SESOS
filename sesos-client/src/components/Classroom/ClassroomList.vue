<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Classroms</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(classroom, index) in classrooms" v-bind:key="classroom.name">
            <th scope="row">{{ index }}</th>
            <td>{{ classroom.name }}</td>
            <td>
              <button type="button" class="btn btn-info">Edit</button>
              <button type="button" class="btn btn-danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ClassroomList",
  data: function() {
    return {
      classrooms: []
    };
  },
  methods: {
    getClassrooms() {
      axios.get('/classroom').then(res => {
        const data = res.data;
        data.forEach(element => {
          this.classrooms.push(element);
        });
      }).catch(error => {
        console.log(error);
      })
    }
  },
  created () {
    this.getClassrooms();
  }

};
</script>

<style scoped>
</style>


