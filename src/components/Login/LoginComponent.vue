<template>
  <div class="flex no-wrap min-h-dvh items-stretch">

    <!-- * Login Right Side -->

    <div
      class="flex flex-col items-center justify-center gap-10 bg-slate-200 w-full p-10"
    >
      <span class="text-4xl  font-bold">Password Generator</span>

      <!-- * Login Box -->

      <div class="flex flex-col justify-center items-stretch">
        <div class="m-5">
          <label for="user" class="text-xl pb-3 block"> User: </label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Usuário" v-model="user" />
          </InputGroup>
        </div>
        <div class="m-5">
          <label for="user" class="text-xl pb-3 block"> Password: </label>
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
          <Button
            type="button"
            label="Entrar"
            :loading="loading"
            class="w-full"
          ></Button>
        </div>
      </div>

     
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Password from "primevue/password";
import Button from "primevue/button";
import { ref, type Ref } from "vue";

const user: Ref<string> = ref("");
const password: Ref<string> = ref("");
const loading: Ref<boolean> = ref(false);
</script>

<style scoped></style>
