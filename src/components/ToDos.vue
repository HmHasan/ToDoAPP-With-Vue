<template>
<div>
    <h3>ToDo</h3>
    <div class="ToDos">
        <div @dblclick='DubbleClick(todo)' v-for="todo in allTodos" :key="todo.id" class="todo" v-bind:class="{'is-complete':todo.completed}">
            {{todo.title}}
            <i @click="deleteTodo(todo.id)" class="fa fa-trash-o"></i>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        DubbleClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            this.updateTodo(updTodo)
        }
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos()

    }

}
</script>

<style scoped>
.is-complete {
    background-color: red !important;
    color: white !important;
}

.ToDos {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 500px) {
    .ToDos {
        grid-template-columns: 1fr;
    }
}

.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: aqua;
}

i.fa.fa-trash-o {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
    cursor: pointer;
    font-weight: bolder;
    transition: .3s;
}

i.fa.fa-trash-o:hover {
    background: red;
    font-weight: initial;
    border-radius: 50%;
    padding: 4px;
}
</style>
