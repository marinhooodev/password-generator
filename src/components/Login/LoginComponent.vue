<template>
<div class="flex no-wrap min-h-dvh items-stretch">
    <!-- Login Left Side -->
    <div
      class="flex flex-col items-center justify-around bg-blue-400 max-w-[50vw] w-full"
    >
      <img
        class="max-w-xs"
        src="@/assets/img/logo_prefeitura.png"
        alt="Logo Cidade de São Paulo Saúde"
      />
      <img class="max-w-xs" src="@/assets/img/logo_sus.png" alt="Logo SUS" />
      <img class="max-w-xs" src="@/assets/img/dtic1.png" alt="Logo SMS DTIC" />
    </div>

    <!-- * Login Right Side -->

    <div
      class="flex flex-col items-center justify-between bg-slate-200 max-w-[50vw] w-full p-10"
    >
      <h1 class="text-3xl uppercase">Coloque aqui o título do seu projeto</h1>

      <!-- * Login Box -->

      <div class="flex flex-col justify-center items-stretch">
        <div class="m-5">
          <label for="user" class="text-xl pb-3 block"> Usuário: </label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Usuário" v-model="user" />
          </InputGroup>
        </div>
        <div class="m-5">
          <label for="user" class="text-xl pb-3 block"> Senha: </label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password
              placeholder="Senha"
              v-model="password"
              toggleMask
              :feedback="false"
              
            />
          </InputGroup>
        </div>

        <div class="m-5">

          <Button type="button" label="Entrar" :loading="loading" class="w-full"></Button>
        </div>
      </div>

      <p class="text-sm text-slate-400 text-center invisible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae
        similique rem explicabo soluta, voluptate, commodi sit aliquam nemo vero
        voluptates error earum impedit odio molestias.
      </p>
    </div>
  </div>

</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { ref, type Ref } from 'vue';


const user: Ref<string> = ref("")
const password: Ref<string> = ref("")
const loading: Ref<boolean> = ref(false)

</script>

<style scoped>

</style>