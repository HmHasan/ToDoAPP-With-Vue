<template>
<div id="app">
    <div class="container">

        <add-todos></add-todos>
        <filterTodo></filterTodo>
        <ToDos />

    </div>

</div>
</template>

<script>
import ToDos from '@/components/ToDos'
import AddTodos from '@/components/AddTodos'
import filterTodo from '@/components/filterTodo'
export default {
    name: 'App',
    components: {
        ToDos,
        AddTodos,
        filterTodo,

    }
}
</script>

<style>
body {
    background: #bcfaf3;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;

}

.container {
    width: 1100px;
    margin: 0 auto;
    overflow: auto;
    padding: 0 2rem;
}
</style>
