<template>
  <div>
    <div class="bg-black h-[920px] w-[320px]">
      <div class="border-b-2 border-teal-600">
        <div
          class="text-white opacity-80 pt-3 pl-3 flex w-[320px] justify-between"
        >
          Gallery
          <div class="pt-1 pr-5">
            <img class="h-5 w-5" src="https://i.imgur.com/mgEVg80.png" alt="" />
          </div>
        </div>
        <div class="pt-0 flex">
          <button type="button" onclick="show()">
            <img
              class="h-12 w-12"
              src="https://i.imgur.com/nN8wOf9.jpg"
              alt=""
            />
          </button>
          <div class="flex justify-between w-[180px]">
            <button class="text-white opacity-80 pt-3 pl-9">Images</button>
            <button class="text-white opacity-80 pt-3">Videos</button>
          </div>
        </div>
      </div>
      <div class="pt-96 pl-[270px]">
        <button>
          <img class="h-6 w-6" src="https://i.imgur.com/xvK855v.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppPage',

  show() {
    Image.source = 'https://i.imgur.com/xvK855v.png'
  },
}
</script>
