<template>
    <div class="container mb-5">
        <h2>Editar Tarea</h2>
        <form @submit.prevent="editarTarea(tarea)">
            <input type="text" class="form-control mb-2" v-model="tarea.nombre">
            <b-button class="btn-md btn-warning" type="submit">Editar</b-button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { db } from '@/plugins/firebase.js'

export default {
    fetch({store, params}) {
        return db.collection('tareas').doc(params.id).get()
            .then(doc => {
                if (doc.exists) {
                    let tarea = doc.data();
                    tarea.id = doc.id;
                    return store.commit('setTareaEditar', tarea);
                }
            })
            .catch(e=>{
                console.log(e)
            })
    },
    computed: {
        tarea: {
            get() {
                return {
                    nombre: this.$store.state.tarea.nombre,
                    id: this.$store.state.tarea.id
                }
            }
        }
    },
    methods: {
        ...mapActions(['editarTarea'])
    }
}
</script>