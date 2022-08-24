<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen space-x-2 md:flex-row bg-gray-50"
  >
    <button @click="isOpen = true">Click</button>

    <div
      v-if="isOpen == true"
      class="fixed flex items-center justify-center w-full h-screen bg-black bg-opacity-60"
    >
      <div class="relative w-64 h-32 bg-white shadow-2xl">
        I am a popup
        <button class="absolute w-6 h-6 bg-white border rounded-full shadow-2xl -top-2 -right-2" @click="isOpen = false">X</button>
     
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResponsivePage',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>