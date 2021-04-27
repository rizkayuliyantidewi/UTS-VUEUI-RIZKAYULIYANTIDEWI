<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/creatematakuliah"
      >Add matakuliah</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nama matakuliah</th>
          <th scope="col">Sks</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(matakuliah, index) in matakuliah" :key="index">
           <td>{{ matakuliah.id}}</td>
          <td>{{ matakuliah.nama_matakuliah}}</td>
          <td>{{ matakuliah.sks}}</td>
         
          <td>
            <router-link class="btn btn-success" :to="{name:'Editmatakuliah', params:
            {id:data.id}}">Edit</router-link>
            
            <button @click.prevent="matakuliahDelete(data.id)" class="btn btn-danger">Delete</button>
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
    let matakuliah = ref([])

    onMounted(() => {
      axios.get('http://localhost:8000/api/matakuliahs')
      .then(response => {
        matakuliah.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function matakuliahDelete(id){
      axios.delete('http://localhost:8000/api/matakuliahs/${id}')
      .then(()=>{
        let z = this.matakuliah.map(matakuliah => matakuliah.id).indexOf(id);
        this.matakuliah.splice(z, 1)
      }).catch(error => {
        console.log(error)
      }
      )
    }

    return {
      matakuliah,
      matakuliahDelete
    }
}
  
};
</script>
