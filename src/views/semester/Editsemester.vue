<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit semester</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">id</label>
          <input
            type="number"
            class="form-control"
            id="inputEmail4"
            v-model="semester.id"
          />
          <div class="alert alert-danger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Semester</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="semester.semester"
          />
          <div class="alert alert-danger" v-if="validation.semester">
            {{ validation.semester[0] }}
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
    const semester = reactive({
      id: "",
      semester: "",
     
     
    });
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(() => {
      axios.get('http://localhost:8000/api/semesters/${route.params.id}')
        .then(response  => {
            console.log(response)


          semester.id = response.data.data.id
          semester.semester = response.data.data.semester
         
          
        })
        .catch((error) => {
          console.log(error.response.data)
        })
    })

    function update() {
      let id = semester.id
      let semester = semester.semester
     
      

      axios.put('http://localhost:8000/api/semesters/${route.params.id}',{
          id: id,
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
      semester,
      validation,
      router,
      update,
      route
    };
  },
};
</script>

