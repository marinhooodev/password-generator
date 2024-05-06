<template>
  <header>
    <nav
      class="bg-blue-700 text-white flex justify-between items-center p-2 shadow-lg z-10 relative"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <img src="@/assets/img/dtic1.png" alt="Logo" class="w-50 h-16" />
      </div>
      <!-- Menu Hamburguer -->
      <button class="block focus:outline-none pr-5" @click="visible = true">
        <!-- 
         * Criar um v-if conforme a rota de admin for criada.
         * Exemplo : v-if="$route.path == '/admin' || $route.path == '/create' " 
        -->

        <i class="pi pi-bars text-3xl"></i>
      </button>
    </nav>

    <Sidebar v-model:visible="visible" class="duration-100">
      <template #header>
        <div class="flex items-center gap-3">
          <i class="pi pi-user text-4xl"></i>
          <p>Seja bem-vindo</p>
        </div>
      </template>
      <div class="flex justify-between flex-col h-full border-t-2 pt-5">
        <ul class="list-none p-0 m-0 overflow-hidden">
          <li>
            <a
              @click="$router.push('/admin'), (visible = false)"
              class="flex items-center cursor-pointer p-3 rounded-xl text-700 hover:bg-slate-200 focus:bg-slate-200 duration-150"
            >
              <i class="pi pi-chart-bar mr-2"></i>
              <span class="font-medium">Painel Admin</span>
            </a>
          </li>

          <li>
            <a
              @click="console.log('Mandar para alguma rota')"
              class="flex items-center cursor-pointer p-3 rounded-xl text-700 hover:bg-slate-200 focus:bg-slate-200 transition duration-150"
            >
              <i class="pi pi-arrow-right mr-2"></i>
              <span class="font-medium">Outra Rota</span>
            </a>
          </li>
        </ul>

        <Button
          icon="pi pi-sign-out"
          label="Sair"
          severity="danger"
          v-ripple
          @click="$router.push('/'), (visible = false)"
        ></Button>
      </div>
    </Sidebar>
  </header>
</template>

<script setup lang="ts">
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import { ref } from "vue";

const visible = ref(false);
</script>

<style scoped></style>
