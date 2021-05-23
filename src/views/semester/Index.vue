<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createsemester"
      >add semester</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">semester</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(semester, index) in semester" :key="index">
           <td>{{ semester.id}}</td>
          <td>{{ semester.semester}}</td>
          
         
         
          <td>
            <router-link class="btn btn-success" :to="{name:'Editsemester', params:
            {id:data.id}}">Edit</router-link>
            
            <button @click.prevent="semesterDelete(data.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src

import { onMounted, ref } from 'vue';

export default {
  
  setup(){
    let semester = ref([])

    onMounted(() => {
      axios.get('http://localhost:8000/api/semesters')
      .then(response => {
        semester.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    

    return {
      semester,
    
    };
},
  
};
</script>
