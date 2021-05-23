<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add kontrak matakuliah</h5>
    <form class="row g-3" @submit.prevent="store">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">id</label>
      <input type="number" class="form-control" id="inputEmail4" 
      v-model="kontrak.id" />
      <div class="alert alert-danger" v-if="validation.id">
        {{ validation.id[0] }}
      </div>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Nama mahasiswa</label>
      <input type="text" class="form-control" id="inputPassword4" 
      v-model="kontrak.nama_mahasiswa" />
       <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
        {{ validation.nama_mahasiswa[0] }}
    </div>
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Semester</label>
      <input
        type="number"
        class="form-control"
        id="inputAddress"
        placeholder="Masukan semester" 
        v-model="kontrak.semester" />
         <div class="alert alert-danger" v-if="validation.semester">
        {{ validation.semester[0] }}
    </div>
    </div>
    
    
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Add</button>
    </div>
  </form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const mahasiswa = reactive({
      id: "",
      nama_mahasiswa: "",
      semester: "",
  
    });
    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = mahasiswa.id;
      let nama_mahasiswa = kontrak.nama_mahasiswa;
      let semester = kontrak.semester;
     

      axios
        .post("http://localhost:8000/api/kontraks", {
          id: id,
          nama_mahasiswa: nama_mahasiswa,
          semester: semester,
          
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      kontrak,
      validation,
      router,
      store,
    };
  },
};
</script>

