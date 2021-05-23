<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">absensi</h5>
    <form class="row g-3" @submit.prevent="store">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">id</label>
      <input type="number" class="form-control" id="inputEmail4" 
      v-model="absensi.id" />
      <div class="alert alert-danger" v-if="validation.id">
        {{ validation.id[0] }}
      </div>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Tanggal absen</label>
      <input type="text" class="form-control" id="inputPassword4" 
      v-model="absensi.tanggal_absen" />
       <div class="alert alert-danger" v-if="validation.tanggal_absen">
        {{ validation.tanggal_absen[0] }}
    </div>
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Waktu absen</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress"
        v-model="absensi.waktu_absen" />
         <div class="alert alert-danger" v-if="validation.waktu_absen">
        {{ validation.waktu_absen[0] }}
    </div>
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Nama mahasiswa</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress2"
        placeholder="Masukan Nama mahasiswa"
      v-model="absensi.nama_mahasiswa" />
       <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
        {{ validation.nama_mahasiswa[0] }}
    </div>
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">Mata kuliah</label>
      <input type="text" class="form-control" id="inputCity" v-model="absensi.mata_kuliah" />
     <div class="alert alert-danger" v-if="validation.mata_kuliah">
        {{ validation.mata_kuliah[0] }}
     </div>
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">Keterangan</label>
      <input type="text" class="form-control" id="inputCity" v-model="absensi.keterangan" />
     <div class="alert alert-danger" v-if="validation.keterangan">
        {{ validation.keterangan[0] }}
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
    const absensi = reactive({
      id: "",
      tanggal_absen: "",
      waktu_absen: "",
      nama_mahasiswa: "",
      mata_kuliah: "",
      keterangan: "",
    });
    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = absensi.id;
      let tanggal_absen = absensi.tanggal_absen;
      let waktu_absen = absensi.waktu_absen;
      let nama_mahasiswa = absensi.nama_mahasiswa;
      let mata_kuliah = absensi.mata_kuliah;
     let keterangan = absensi.keterangan;

      axios
        .post("http://localhost:8000/api/absensis", {
          id: id,
          tanggal_absen: tanggal_absen,
          waktu_absen: waktu_absen,
          nama_mahasiswa: nama_mahasiswa,
          mata_kuliah: mata_kuliah,
          keterangan: keterangan,
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
      absensi,
      validation,
      router,
      store,
    };
  },
};
</script>

