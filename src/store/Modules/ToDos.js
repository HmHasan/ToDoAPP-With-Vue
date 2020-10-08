/* eslint-disable */ 

import axios from 'axios';

const state = {
    todos:[],
};

const getters = {
    allTodos:state=>state.todos
};

const actions ={
     fetchTodos({commit})
    {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>{
           commit('setTodos',response.data)
        })
    },
    async addTodo({commit},title)
    {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos",{title,completed:false});
        commit('NewTodo',response.data);
    },

    async deleteTodo({commit},id)
    {
             await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('RemoveTodo',id)
    },

    async filterTodo({commit},e) 
    {
        //get Selected Number
        let limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
       
        const response  = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos',response.data)
    },

    async updateTodo({commit},updTodo)
    {
        const response  = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
        commit('updateTodo',updTodo);
        console.log(response.data);
    }
};

const mutations = 
{
    setTodos:(state,todos)=>(state.todos = todos),
    NewTodo:(state,todo)=>(state.todos.unshift(todo)),
    RemoveTodo:(state,id)=>state.todos = state.todos.filter(todo=>todo.id !== id),
    updateTodo:(state,updTodo) =>{
        const index = state.todos.findIndex(todo=>todo.id === updTodo.id);
             if(index !== -1)
             {
                 state.todos.splice(index, 1 ,updTodo)
             }

    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}