<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit jadwal</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">id</label>
          <input
            type="number"
            class="form-control"
            id="inputEmail4"
            v-model="jadwal.id"
          />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Jadwal</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="jadwal.jadwal"
          />
          <div class="alert alert-danger" v-if="validation.jadwal">
            {{ validation.jadwal[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Mata kuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
           
            v-model="jadwal.mata_kuliah"
          />
          <div class="alert alert-danger" v-if="validation.mata_kuliah">
            {{ validation.mata_kuliah[0] }}
          </div>
        </div>
        
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  setup() {
    const jadwal = reactive({
      id: "",
      jadwal: "",
      mata_kuliah: ""
     
    });
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(() => {
      axios.get('http://localhost:8000/api/jadwals/${route.params.id}')
        .then(response  => {
            console.log(response)


          jadwal.id = response.data.data.id
          jadwal.jadwal = response.data.data.jadwal
          jadwal.mata_kuliah= response.data.data.mata_kuliah
          
        })
        .catch((error) => {
          console.log(error.response.data)
        })
    })

    function update() {
      let id = jadwal.id
      let jadwal = jadwal.jadwal
      let mata_kuliah = jadwal.mata_kuliah
      

      axios.put('http://localhost:8000/api/jadwals/${route.params.id}',{
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
      update,
      route
    };
  },
};
</script>

