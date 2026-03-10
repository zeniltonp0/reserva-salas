import { defineStore } from 'pinia';
import api from '@/api/axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    erro: null
  }),

  actions: {
    async login(email, password) {
      try {
        this.erro = null;
        await api.get('/sanctum/csrf-cookie');
        await api.post('/api/login', { email, password });
        await this.getUser();
        return true;
      } catch (erro) {
        console.log('Erro no login', erro);
        this.erro = erro.response?.data?.message || 'Credenciais inválidas';
        return false;
      }
    },
    async register(name, email, password, role) {
      try {
        this.erro = null;
        await api.get('/sanctum/csrf-cookie');
        await api.post('/api/register', { name, email, password, role });
        await this.getUser();
        return true;
      } catch (erro) {
        console.log('Erro no login', erro);
        this.erro = erro.response?.data?.message || 'Credenciais inválidas';
        return false;
      }
    },
    async getUser() {
      try {
        const response = await api.get('/api/user');
        this.user = response.data.user;
      } catch (erro) {
        this.user = null;
      }
    }
  }
});