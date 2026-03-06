<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';

    const erro = ref(null);
   
    const form = reactive({
        name: '',
        email: '',
        password: '',
        role: 'user'
    });

    const handleRegister = async () => {
        try{
            await axios.post('http://localhost:8000/api/register', form);
            alert('Cadastro realizado com sucesso!');
        }
        catch (erro) {
            console.log('Erro no cadastro', erro);
            erro.value = erro.response?.data?.message || 'Erro no cadastro';
        }
    }
</script>

<template>
    <form class="space-y-6">
        <h1 class="text-2xl text-center">Registro</h1>
        <div class="block text-sm font-medium text-gray-700">
            <label>Nome</label>
            <input
            v-model="form.name"
            type="text" 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Email</label>
            <input 
            v-model="form.email"
            type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Senha</label>
            <input
            v-model="form.password"
            type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Tipo de Usuário</label>
            <select
            v-model="form.role"
            type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
                <option value="user">Usuário</option>
                <option value="admin">Admin</option>
        </select>
        </div>

        <div v-if="erro" class="bg-red-50 p-2 px-4 rounded-md border border-red-200">
            <p class="text-red-600 text-sm font-medium">{{ erro }}</p>
        </div>
        <button type="submit"
                class="w-full flex justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer">
            Criar conta
        </button>
    </form>
</template>