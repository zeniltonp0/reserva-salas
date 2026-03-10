<template>
  <nav class="bg-white shadow-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-blue-600 shrink-0">
            Reserva de Salas
          </router-link>
          
          <div class="hidden md:ml-6 md:flex md:space-x-4">
            <router-link to="/dashboard" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </router-link>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-sm text-gray-700 font-medium">
            Olá, <span class="text-blue-600">{{ auth.user?.name || 'Usuário' }}</span>
          </div>
          
          <button 
            @click="handleLogout"
            class="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Sair
          </button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { RouterLink, useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  await auth.logout();
  router.push({ name: 'Login' });
};
</script>