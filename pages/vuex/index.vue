<template>
    <div class="container">
       <h2>Vuex</h2> 
       <form @submit.prevent="agregarTarea(tarea)">
           <input type="text" class="form-control mb-2" v-model="tarea">
           <b-button class="btn-md btn-info" type="submit">Agregar</b-button>
       </form>
       <ul>
           <li v-for="(tarea, index) in tareas" :key="index">
               {{ tarea.id }} - {{ tarea.nombre }}
               <b-button class="btn-sm btn-warning" :to="`/vuex/${tarea.id}`">Editar</b-button>
               <b-button class="btn-sm btn-danger" @click="eliminarTarea(tarea)">Eliminar</b-button>
               <hr>
           </li>
       </ul>
    </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapState, mapActions } from 'vuex'; 

export default {
    // fetch({store}) {
    //     return db.collection('tareas').get()
    //         .then(query => {
    //             const tareas = []
    //             query.forEach(element => {
    //                 tareas.push(element.data())
    //             });
    //             return store.commit('setTareas', tareas)
    //         })
    //         .catch(function(error) {
    //             console.log("Error obteniendo documentos: ", error);
    //         });
    // }
    data() {
        return {
            tarea: ''
        }
    },
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['agregarTarea', 'eliminarTarea'])
    }
}
</script>