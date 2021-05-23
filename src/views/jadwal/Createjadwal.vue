<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add jadwal</h5>
    <form class="row g-3" @submit.prevent="store">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">id</label>
      <input type="number" class="form-control" id="inputEmail4" 
      v-model="jadwal.id" />
      <div class="alert alert-danger" v-if="validation.id">
        {{ validation.id[0] }}
      </div>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Jadwal</label>
      <input type="text" class="form-control" id="inputPassword4" 
      v-model="jadwal.jadwal" />
       <div class="alert alert-danger" v-if="validation.jadwal">
        {{ validation.jadwal[0] }}
    </div>
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Matakuliah</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress"
        v-model="jadwal.mata_kuliah" />
         <div class="alert alert-danger" v-if="validation.mata_kuliah">
        {{ validation.mata_kuliah[0] }}
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
    const jadwal = reactive({
      id: "",
      jadwal: "",
      mata_kuliah: "",
  
    });
    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = jadwal.id;
      let jadwal = jadwal.jadwal;
      let mata_kuliah = jadwal.mata_kuliah;
     

      axios
        .post("http://localhost:8000/api/jadwals", {
          id: id,
          jadwal: jadwal,
          mata_kuliah: mata_kuliah,
          
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
      jadwal,
      validation,
      router,
      store,
    };
  },
};
</script>

