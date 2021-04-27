<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createmahasiswa"
      >Add mahasiswa</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nama mahasiswa</th>
          <th scope="col">Alamat</th>
          <th scope="col">No tlp</th>
          <th scope="col">Email</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mahasiswa, index) in mahasiswa" :key="index">
           <td>{{ mahasiswa.id}}</td>
          <td>{{ mahasiswa.nama_mahasiswa}}</td>
          <td>{{ mahasiswa.alamat}}</td>
          <td>{{ mahasiswa.no_tlp}}</td>
          <td>{{ mahasiswa.email}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name:'Editmahasiswa', params:
            {id:data.id}}">Edit</router-link>
            
            <button @click.prevent="mahasiswaDelete(data.id)" class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
  },
  setup(){
    let mahasiswa = ref([]);

    onMounted(() => {
      axios.get('http://localhost:8000/api/mahasiswas')
      .then(response => {
        mahasiswa.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function mahasiswaDelete(id){
      axios.delete('http://localhost:8000/api/mahasiswas/${id}')
      .then(()=>{
        let z = this.mahasiswa.map(mahasiswa => mahasiswa.id).indexOf(id);
        this.mahasiswa.splice(z, 1)
      }).catch(error => {
        console.log(error)
      }
      )
    }

    return {
      mahasiswa,
      mahasiswaDelete
    }
}
  
};
</script>
