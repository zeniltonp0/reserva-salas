import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    erro: null 
  }),

  actions: {
    async login(email, password) {
      try {
        this.erro = null;
        await axios.post('http://localhost:8000/api/login', { email, password });
        return true;
      } catch (erro) {
        console.log('Erro no login', erro);
        this.erro = erro.response?.data?.message || 'Erro no login';
        
        return false;
      }
    },
    async register(name, email, password, role) {
      try {
        this.erro = null;
        await axios.post('http://localhost:8000/api/register', { name, email, password, role });
        return true;
        
      } catch (erro) {
        console.log('Erro no registro', erro);
        this.erro = erro.response?.data?.message || 'Erro no registro';
        return false;
      }
    }
  }
});