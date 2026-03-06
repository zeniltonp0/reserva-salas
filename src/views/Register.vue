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
                <option>Admin</option>
                <option>Usuário</option>
        </select>
        </div>
        <button>
            Criar conta
        </button>
    </form>
</template>