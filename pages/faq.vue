<template>
  <div>
    <ul v-for="(content, id) in titles" :key="id">
      <li>
        <span class="w-[260px] flex">What the demo session would look like?
        <span @click="content.show = !content.show"><button  class="pt-4 pl-12"></button><img class="w-[20px] h-[20px]" src="https://i.imgur.com/MMTgNYv.png" alt=""> </button></span> </br ></span>
        <span v-if="content.show"> {{content.msg}} </span>
      </li>
    </ul>
</div>
</template>
<script>

export default {
  name: 'FaqPage',
  data() {
    return {
      show:false,
      titles:[
{ id: 0, msg: 'You can contact our Support team between 9AM to 6PM via call (9977885511) or raise your query through WhatsApp and our support team will reach you within 12 hours.' , show: false},
{ id: 1, msg: 'qwerty' , show: false},


      ],
    }
  },
}
</script>
