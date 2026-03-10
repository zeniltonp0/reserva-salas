<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const auth = useAuthStore();

const erro = ref('');
const email = ref('');
const password = ref('');

const handleLogin = async () => {
    console.log('aqui')
  const sucesso = await auth.login(email.value, password.value);
  
  if (sucesso) {
    alert('Login realizado com sucesso!');
    router.push({ name: "Home" });
  }
};
</script>

<template>
    <form @submit.prevent="handleLogin" class="space-y-6">
        <h1 class="text-2xl text-center">Login</h1>
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
        <div v-if="erro" class="bg-red-50 p-2 px-4 rounded-md border border-red-200">
            <p class="text-red-600 text-sm font-medium">{{ erro }}</p>
        </div>
        <button type="submit"
                class="w-full flex justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer">
            Entrar
        </button>
    </form>
</template>