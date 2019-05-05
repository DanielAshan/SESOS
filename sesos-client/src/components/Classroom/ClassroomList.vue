<template>
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
</template>

<script>
export default {
  name: "ClassroomList",
  data: function() {
    return {
      classrooms: [
        {
          name: "E3"
        },
        {
          name: "E4"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>


