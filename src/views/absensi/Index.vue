<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createabsensi"
      >absensi</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Tanggal absen</th>
          <th scope="col">Waktu absen</th>
          <th scope="col">Nama mahasiswa</th>
          <th scope="col">Mata kuliah</th>
          <th scope="col">Keterangan</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(absensi, index) in absensi" :key="index">
           <td>{{ absensi.id}}</td>
          <td>{{ absensi.tanggal_absen}}</td>
          <td>{{ absensi.waktu_absen}}</td>
          <td>{{ absensi.nama_mahasiswa}}</td>
          <td>{{ absensi.mata_kuliah}}</td>
          <td>{{ absensi.keterangan}}</td>
         
          <td>
            <router-link class="btn btn-success" :to="{name:'Editabsensi', params:
            {id:data.id}}">Edit</router-link>
            
            <button @click.prevent="absensiDelete(data.id)" class="btn btn-danger">Delete</button>
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
    let absensi = ref([])

    onMounted(() => {
      axios.get('http://localhost:8000/api/absensis')
      .then(response => {
        absensi.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    

    return {
      absensi,
    
    };
},
  
};
</script>
