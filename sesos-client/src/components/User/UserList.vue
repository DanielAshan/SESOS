<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Users</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">University Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" v-bind:key="user.name">
            <th scope="row">{{ index }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.university_id }}</td>
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
  name: "UsersList",
  data: function() {
    return {
      users: []
    };
  },
  methods: {
    getUsers() {
      axios.get('/user').then(res => {
        const data = res.data;
        data.forEach(element => {
          this.users.push(element);
        });
      }).catch(error => {
        console.log(error);
      })
    }
  },
  created () {
    this.getUsers();
  }

};
</script>

<style scoped>
</style>


