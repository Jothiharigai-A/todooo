<template>
  <div class="pt-36 pl-10 flex">
    <div class="h-80 w-1/3 border rounded-2xl bg-black flex">
      <div class="text-white p-8 text-2xl font-bold">Weather

     <div class=" pt-8">
        <div class="flex pt-7 pb-7 pl-7 pr-20 border border-gray-900 bg-gray-900 rounded-2xl">
          <img class="h-6 w-3" src="https://i.imgur.com/JDxvZDE.png" alt="" />
          <div class="pl-4 text-gray-400 font-normal text-sm">Temperature</div>
          <div class="pl-3 text-white font-bold  text-sm ">32°C</div>
       </div>
       </div>
        <div class="pt-6">
          <div class="flex pt-7 pb-7 pl-7 border border-gray-900 bg-gray-900 rounded-2xl">
            <img class="h-6 w-3" src="https://i.imgur.com/JDxvZDE.png" alt="" />
            <div class="pl-4 text-gray-400 font-normal text-sm">Pressure</div>
            <div class="pl-3 text-white font-bold text-sm">998hPa</div>
          </div>
        </div>
      </div>
      <div class=" pt-10 pb-8">
      <div class=" p-8 border bg-gray-900 border-gray-900 rounded-2xl ">
        <img  src="https://i.imgur.com/Td2mT3u.png" alt="" />
        <div class="text-white pl-10 pt-5  text-2xl font-bold">Sunny</div>
      </div>
      </div>
    </div>
  </div>
  
</template>
<script>

export default {
  name: 'SatelitePage',
}
</script>
