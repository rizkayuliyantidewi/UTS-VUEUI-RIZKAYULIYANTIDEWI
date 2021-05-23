<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createkontrakmatakuliah"
      >Add kontrak matakuliah</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nama mahasiswa</th>
          <th scope="col">Semester</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kontrak, index) in kontrak" :key="index">
           <td>{{ kontrak.id}}</td>
          <td>{{ kontrak.nama_mahasiswa}}</td>
          <td>{{ kontrak.semester}}</td>
         
          <td>
            <router-link class="btn btn-success" :to="{name:'Editkontrak', params:
            {id:data.id}}">Edit</router-link>
            
            <button @click.prevent="kontrakDelete(data.id)" class="btn btn-danger">Delete</button>
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
    let kontrak = ref([])

    onMounted(() => {
      axios.get('http://localhost:8000/api/kontraks')
      .then(response => {
        kontrak.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function kontrakDelete(id){
      axios.delete('http://localhost:8000/api/kontraks/${id}')
      .then(()=>{
        let z = this.kontrak.map(kontrak => kontrak.id).indexOf(id);
        this.kontrak.splice(z, 1)
      }).catch(error => {
        console.log(error)
      }
      )
    }

    return {
      kontrak,
      kontrakDelete
    }
}
  
};
</script>
