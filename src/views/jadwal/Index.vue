<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createjadwal"
      >add jadwal</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">jadwal</th>
          <th scope="col">mata kuliah</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jadwal, index) in jadwal" :key="index">
           <td>{{ jadwal.id}}</td>
          <td>{{ jadwal.jadwal}}</td>
          <td>{{ jadwal.mata_kuliah}}</td>
         
         
          <td>
            <router-link class="btn btn-success" :to="{name:'Editjadwal', params:
            {id:data.id}}">Edit</router-link>
            
            <button @click.prevent="jadwalDelete(data.id)" class="btn btn-danger">Delete</button>
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
    let jadwal = ref([])

    onMounted(() => {
      axios.get('http://localhost:8000/api/jadwals')
      .then(response => {
        jadwal.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    

    return {
      jadwal,
    
    };
},
  
};
</script>
