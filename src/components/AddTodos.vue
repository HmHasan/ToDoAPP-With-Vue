<template>
<div>
    <h3>Add Todo</h3>
    <div class="add-new">
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Add New ToDo" v-model="title">
            <input type="submit" value="ADD">
        </form>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            title: '',
        }
    },
    name: 'addTodo',
    methods: {
        ...mapActions(['addTodo']),
        onSubmit() {
            this.addTodo(this.title);
            this.title = ''
        }
    }
}
</script>

<style scoped>
.add-new {
    width: 100%;
}

.add-new input[type="text"] {
    width: 80%;
    padding: 10px;
    border: none;
    outline: none;
    margin-bottom: 10px;
    border-radius: 4px;
}

.add-new input[type="submit"] {
    border: none;
    padding: 10px;
    border-radius: 5px;
    background: #50b883;
    color: white;
    margin-left: 10px;
    width: 17%;
    cursor: pointer;
}
</style>
