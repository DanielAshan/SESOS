<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Attendance List</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Els</th>
            <th scope="col">Lecture</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in attendanceRecords" v-bind:key="record.name">
            <th scope="row">{{ index }}</th>
            <td>{{ record.els_id }}</td>
            <td>{{ record.lecture_id }}</td>
            <td>{{ record.createdAt }}</td>
          </tr>
        </tbody>
      </table>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "AttendanceList",
  data: function() {
    return {
      attendanceRecords: [],
    };
  },
  methods: {
    getAttendanceList() {
      axios.get('/attendance').then(res => {
        const data = res.data;
        data.forEach(element => {
          this.attendanceRecords.push(element);
        });
      }).catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.getAttendanceList();
  }
};
</script>

<style scoped>
</style>


