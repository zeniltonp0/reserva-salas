<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const auth = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');

const handleRegister = async () => {
  const sucesso = await auth.register(name.value, email.value, password.value, role.value);
  
  if (sucesso) {
    alert('Cadastro realizado com sucesso!');
    router.push({ name: "Login" });
  }
}
</script>

<template>
    <form @submit.prevent="handleRegister" class="space-y-6">
        <h1 class="text-2xl text-center">Cadastro</h1>
        <div class="block text-sm font-medium text-gray-700">
            <label>Nome</label>
            <input 
            v-model="name"
            type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Email</label>
            <input 
            v-model="email"
            type="text"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Senha</label>
            <input
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-500">
        </div>
        <div class="block text-sm font-medium text-gray-700">
            <label>Tipo de Usuário</label>
            <select
            v-model="role"
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
            Entrar
        </button>
    </form>
</template>