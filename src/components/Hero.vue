<script>
import axios from '../plugin/base_url'
import jsPDF from 'jspdf';
export default {

    name:'Hero',
    data(){
        return{
            keyword:'',
            result:[],
            select_sertifikat:'',
            sertifikat:'',
            loading:''
        }
    },
    methods:{
        async search()
        {
            try {
                const get = await axios.get(`nik/${this.keyword}/id/${this.sertifikat}`);
                if(get.data.msg ==  true)
                {
                    this.keyword = ''
                    this.sertifikat = ''
                    $.toast({
                        heading: `Berhasil`,
                        text: `Mengambil datar dari server`,
                        showHideTransition: 'slide-right',
                        icon: 'info',
                        hideAfter: false,
                        position: 'top-right',
                        bgColor: '#6CC380'
                    })
                    const { judul,nomor_sertifikat,tema,name,nik,id_sertifikat} = get.data.data[0]
                    const doc = new jsPDF({
                    orientation: "landscape",
                    unit: "mm",
                    format: 'a4'
                    });
                    doc.text(150, 101,name)
                    doc.output('dataurlnewwindow');
                    //doc.save(`${nomor_sertifikat}.pdf`);

                }else{
                    this.sertifikat = ''
                    this.keyword = ''
                    $.toast({
                        heading: `Not Found`,
                        text: `${get.data.pesan}`,
                        showHideTransition: 'slide-right',
                        icon: 'info',
                        hideAfter: false,
                        position: 'top-right',
                        bgColor: '#E44740'
                    })
                }
            } catch (error) {
                $.toast({
                    heading: `Not Found`,
                    text: `${error}`,
                    showHideTransition: 'slide-right',
                    icon: 'info',
                    hideAfter: false,
                    position: 'top-right',
                    bgColor: '#FFD15C'
                })
            }
        },
        async get_data()
        {
            const results = await axios.get('sertifikat-all');
            this.result = results.data.data
        },
    },
    created()
    {
        this.get_data()
    }
}
</script>
<template>
    <div class="hero">
        <div class="jumbotron hero-section">
            <div class="text-center">
                <img src="../assets/medal.png" class="icon shadow" width="200" alt="" srcset="">
                <h1 class="mt-4 e">Elektronik <strong class="thumb">Sertifikat</strong></h1>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 col-12 mt-1">
                        <h5 class="text-hero">E-Sertifikat Seleksi dan Penghargaan dari Dinas Pariwisata Bone Bolango</h5>
                        <p>Sponsor oleh : </p>
                        <span class="badge badge-primary">Dinas Pariwisata dan Pemuda Olahraga</span> :
                        <span class="badge badge-success">Universitas Ichsan Gorontalo</span>
                    </div>
                </div>
            </div> 
        </div>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <h3 class="list-e">E-SERTIFIKAT</h3>
                <div class="col-md-12 text-center">
                    Masukkan Nomor Induk Kependudukan dan Nomor Peserta serta pilih Sertifikat yang telah Anda ikuti
                </div>
                <div class="col-md-2 col-4">
                    <hr class="custom">
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 col-12">
                    <div class="form-group">
                       <select class="form-control" v-model="sertifikat">
                           <option value="">Pilih Sertifikat</option>
                           <option :value="r.id" v-for="r in result" :key="r.id">
                               {{r.judul}}
                           </option>
                       </select>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="keyword" class="form-control" placeholder="NIK atau Nomor Peserta">
                        <small v-if="keyword.length > 0">Hasil Pencarian : <strong>{{keyword}}</strong></small>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark" v-on:click="search"><i class="fa fa-dwonload"></i>dwonload sertifikat</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .form-control{
        font-family: 'Quicksand', sans-serif;   
        height: 60px;
    }
    .form-control:focus{
        border-color:white;
        box-shadow: none;

    }
    .custom{
       border-width: 5px;
       background-color:rgb(85,96,128);
       border-radius: 20px;
    }
    .thumb{
        background-color:rgb(228,71,64);
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;
        color: white;
    }
    .hero{
        margin-top:50px;
    }
    .list-e{
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
    }
    .e{
        font-size: 40px;
    }
    .text-center{
        font-family: 'Quicksand', sans-serif;
    }
    .hero-section{
        background-color: #FDE3E2;
    }
    .hero-list{
        background-color: #0a201f;
    }
    .icon{
        border-color:rgb(228,71,64);
        background-color: rgb(228,71,64);
        border-radius: 100px;
        padding-right: 20px;
        padding-left: 20px;
        padding-bottom: 20px;
        padding-top: 20px;
    }
</style>