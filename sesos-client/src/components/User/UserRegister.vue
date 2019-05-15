<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Users</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Classroom</th>
            <th scope="col">ElsID</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in records" v-bind:key="record.id">
            <th scope="row">{{ index }}</th>
            <td>{{ record.classroom }}</td>
            <td>{{ record.els_id }}</td>
            <td>{{ record.createdAt }}</td>
          </tr>
        </tbody>
      </table>
      <hr>
      <h3>Register</h3>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="user.email" required>
        </div>
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" v-model="user.first_name" id="first_name">
        </div>
        <div class="form-group">
          <label for="last_name">Last name</label>
          <input type="text" class="form-control" id="last_name" v-model="user.last_name">
        </div>
        <div class="form-group">
          <label for="university_id">University Id</label>
          <input type="number" class="form-control" id="university_id" v-model="user.university_id" required>      
        </div>
        <div class="form-group">
          <label for="els_id">ELS Id</label>
          <input type="text" class="form-control" id="els_id" v-model="user.els_id" required>      
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "UserRegister",
  data: function() {
    return {
      records: [],
      user: {
        university_id : null,
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        els_id: ''
      }

    };
  },
  methods: {
    getRecordList() {
      axios.get('/register').then(res => {
        const data = res.data;
        data.forEach(element => {
          this.records.push(element);
        });
      }).catch(error => {
        console.log(error);
      })
    },
    registerUser(event) {
      console.log(this.user);
      axios.post('/user', this.user).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created () {
    this.getRecordList();
  }

};
</script>

<style scoped>
</style>


