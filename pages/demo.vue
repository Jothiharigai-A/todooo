<template>
  <div class="pl-96 bg-gray-100 pr-96 pt-10 mx-auto">
    <div class="pt-60 pl-80 pr-80  min-h-screen">
      <div class="h-56 min-w-max border pt-14 text-center  font-bold  rounded-2xl bg-white"> Do you really want to delete the task?
        <div class=" pt-8 pr-10 pl-10 flex justify-between ">
        <button class=" py-4 px-8 pr-4 text-xs bg-gray-200 border rounded-xl "> No don’t delete</button>
        <button class=" py-4 pl-8 px-12 text-xs bg-red-500 text-white border rounded-xl"> Yes delete</button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoPage',
}
</script>
