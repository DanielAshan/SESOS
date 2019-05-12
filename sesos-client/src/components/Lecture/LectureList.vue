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
    </div>
  </div>
</template>

<script>
export default {
  name: "LectureList",
  data: function() {
    return {
      lectures: [
        {
          name: "Lecture 1",
          startDate: new Date(),
          endDate: new Date(),
          lecturerId: 1,
          classroomId: 1,
        },
        {
          name: "Lecture 2",
          startDate: new Date(),
          endDate: new Date(),
          lecturerId: 2,
          classroomId: 2,
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>


