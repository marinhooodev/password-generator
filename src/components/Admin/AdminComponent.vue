<template>
  <div class="w-full flex justify-center items-center" id="mainBox">
    <div
      id="passwordBox"
      class="shadow-xl border border-slate-100 w-full max-w-screen-lg rounded-md"
    >
      <div
        class="w-full border-b flex justify-between items-center border-slate-100 p-10"
      >
        <span class="text-2xl">Generate Random Password</span>
        <i class="pi pi-lock text-2xl"></i>
      </div>
      <div class="w-full p-10 flex flex-col">
        <div class="flex items-center justify-between gap-10 mb-3">
          <InputText
            placeholder="Password will appear here"
            disabled
            class="my-5 w-full"
          />

          <div class="w-full flex justify-center items-center">
            <Slider v-model="passwordRange" class="w-full" :max="64" />
            <InputNumber v-model="passwordRange" class="mx-5 max-w-[auto]"/>
          </div>
        </div>
        <div class="flex items-center justify-between gap-10">

            <div class="flex justify-center items-center">
                <span class="text-2xl border-l-2 pl-2 border-slate-300"> Password Settings</span>
                <i class="pi pi-cog text-2xl mx-3 pi-spin text-app-purple"></i>
            </div>
          
        </div>
        <div class="flex items-center justify-between gap-10">

            <div>
                <Checkbox v-model="char" :binary="true"  />
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "primevue/checkbox"
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Slider from "primevue/slider";
import { ref } from "vue";

const passwordRange = ref(0);
const char = ref<boolean>(false)


const teste = () => {
    
}
</script>

<style lang="scss">
#mainBox {
    min-height: calc(100dvh - 50px);
}

.p-checkbox-box {

    padding: 50px;
}
</style>
