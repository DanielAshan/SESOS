<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Lectures</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Lecturer</th>
            <th scope="col">Classroom</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(lecture, index) in lectures" v-bind:key="lecture.name">
            <th scope="row">{{ index }}</th>
            <td>{{ lecture.name }}</td>
            <td>{{ lecture.startDate }}</td>
            <td>{{ lecture.endDate }}</td>
            <td>{{ lecture.lecturerId }}</td>
            <td>{{ lecture.classroomId }}</td>
            <td>
              <button type="button" class="btn btn-info">Edit</button>
              <button type="button" class="btn btn-danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <h5 class="card-title">Create lecture</h5>
      <form @submit.prevent="createLecture">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="lecture.name">
        </div>
        <div class="form-group">
          <label for="startDate">Start date</label>
          <datetime format="YYYY-MM-DD H:i" v-model="lecture.startDate"></datetime>
        </div>
        <div class="form-group">
          <label for="endDate">End date</label>
          <datetime format="YYYY-MM-DD H:i" v-model="lecture.endDate"></datetime>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import datetime from 'vuejs-datetimepicker'
export default {
  name: "LectureList",
  components: {
    datetime
  },
  data: function() {
    return {
      lectures: [],
      lecture: {
        name : 'Testowe zajecia',
        startDate: '',
        endDate: '',
      }
    };
  },
  methods: {
    getLectureList() {
      axios.get('/lecture').then(res => {
        const data = res.data;
        data.forEach(element => {
          this.lectures.push(element);
        });
      }).catch(error => {
        console.log(error);
      })
    },
    createLecture(event) {
      // console.log(this.lecture);
      axios.post('/lecture', this.lecture).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created() {
    this.getLectureList();
  },
  mounted() {
    // var $ = jquery;
    // global.jQuery = jquery;
    // console.log(jquery);
    // $('#startDate').Zebra_DatePicker({
    //   format: 'Y-m-d H:i'
    // });
  }
};
</script>

<style scoped>
</style>


