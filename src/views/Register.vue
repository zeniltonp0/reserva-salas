<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';

    const erro = ref(true);
   
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
            <input type="text" 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Email</label>
            <input type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Senha</label>
            <input type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Tipo de Usuário</label>
            <select type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
                <option value="user">Usuário</option>
                <option value="admin">Admin</option>
        </select>
        </div>

        <div v-if="erro" class="bg-red-50 p-2 px-4 rounded-md border border-red-200">
            <p class="text-red-600 text-sm font-medium">{{ erro }}</p>
        </div>
        <button>
            Criar conta
        </button>
    </form>
</template>