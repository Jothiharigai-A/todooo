<template>
  <div class="w-full flex flex-col justify-between items-center">
    <div
      v-for="(instagramapp, index) of instas"
      :key="index"
      class="w-[360px] h-[590px] bg-slate-50 pt-3 pl-3 sm:w-[480px]"
    >
      <div class="border pl-2 pt-3 pr-1 shadow-xl rounded-xl bg-white">
        <div class="flex w-[340px] justify-between px-3 py-3 sm:w-[470px]">
          <div class="flex">
            <img
              class="h-7 w-7"
              src="https://i.imgur.com/DtjqkRc.png"
              alt="profile"
            />
            <span class="pl-2">{{ instagramapp.username }}</span>
          </div>
          <div class="pr-4 pt-2">
            <img class="h-4 w-5" src="https://i.imgur.com/K3nO0tB.png" alt="" />
          </div>
        </div>
        <div class="pl-3 pr-3 pb-5 sm:pl-3 sm:pt-3">
          <button @click="isOpen = true">
            <img
              :src="instagramapp.photo"
              class="h-80 w-[320px] sm:h-80 sm:w-[580px]"
              alt=""
            />
          </button>
          <div class="flex w-[310px] justify-between pt-5 pb-3 sm:w-[430px]">
            <div class="flex w-[90px] justify-between">
              <button
                @click="
                  instagramapp.liked = !instagramapp.liked
                  sendLike(instagramapp.id, index)
                "
              >
                <img
                  v-if="!instagramapp.liked"
                  src="https://i.imgur.com/oUWPRCz.pngg"
                  class="h-5 w-5"
                  alt=""
                />
                <img
                  v-if="instagramapp.liked"
                  src="https://i.imgur.com/HBalfFn.png"
                  class="h-5 w-5"
                  alt=""
                />
              </button>
              <button>
                <img
                  class="h-5 w-5"
                  src="https://i.imgur.com/jBlN3Z6.png"
                  alt=""
                />
              </button>
              <button>
                <img
                  class="h-5 w-5"
                  src="https://i.imgur.com/iww5idu.png"
                  alt=""
                />
              </button>
            </div>
            <div class="pl-5">
              <button
                @click="
                  instagramapp.saved = !instagramapp.saved
                  sendSave(instagramapp.id, index)
                "
              >
                <img
                  v-if="!instagramapp.saved"
                  src="https://i.imgur.com/ElPEQaU.png"
                  class="h-5 w-5"
                  alt=""
                />
                <img
                  v-if="instagramapp.saved"
                  src="https://i.imgur.com/bDr9Fkx.png"
                  class="h-5 w-5"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div class="flex flex-col text-sm">
            <span class="font-extrabold">{{ instagramapp.likes }} likes</span>
            <div class="flex">
              <span class="font-bold">{{ instagramapp.username }}</span>
              <span class="pl-3 text-xs pt-[2px]">{{
                instagramapp.description
              }}</span>
            </div>

            <span class="text-xs flex">
              <input
                v-model="input"
                autocomplete=" on"
                placeholder="add a comment"
                class="text-black"
                @keypress.enter="addToLst()"
            /></span>
            <span class="text-xs opacity-60 pt-1"
              >{{ instagramapp.updatedAt }}
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="isOpen == true"
        class="fixed top-24 left-28 flex items-center justify-center"
      >
        <img class="h-92 w-[620px]" :src="instagramapp.photo" alt="" />
        <button
          class="fixed top-24 left-28 flex items-center justify-center"
          @click="isOpen = false"
        >
          <img class="h-92 w-[620px]" :src="instagramapp.photo" alt="" />
        </button>
      </div>
      <!--
      <div
        v-if="changeImage == true"
        class="fixed top-[456px] left-[153px] flex items-center justify-center"
      >
        <button
          class="fixed top-[458px] left-[153px] flex items-center justify-center"
          @click="changeImage = false"
        >
          <img class="h-5 w-5 absolute animate-ping  ease-linear" src="https://i.imgur.com/HBalfFn.png" alt="" style="transition:.4s; " />
            <img class="h-5 w-5 relative" src="https://i.imgur.com/HBalfFn.png" alt="" />
        </button>
      </div>

      <div
        v-if="saveImage == true"
        class="fixed top-[455px] left-[154px] flex items-center justify-center"
      >
        <button
          class="fixed top-[455px] left-[663px] flex items-center justify-center"
          @click="saveImage = false"
        >
          <img
            class="h-5 w-5 absolute animate-ping transition duration-[10ms] ease-linear"
            src="https://i.imgur.com/bDr9Fkx.png"
            alt=""
          />
          <img
            class="h-5 w-5 relative"
            src="https://i.imgur.com/bDr9Fkx.png"
            alt=""
          />
        </button>
      </div>

      <div>
        <ul>
          <li v-for="(item, index) of list" :key="index">
            <span>{{ item.comMents}}</span>

          </li>
        </ul>
      </div>
      -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'InstaPage',
  data() {
    return {
      isOpen: false,
      changeImage: false,
      saveImage: false,
      instas: [],
      input: '',
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/instas').then(async (respose) => {
      const data = await respose.json()
      this.instas = data.instas
    })
  },
  methods: {
    sendLike(postId, index) {
      fetch('/api/like/' + postId, {
        method: 'POST',
      }).then((response) => {
        console.log(response)
        this.instas[index].likes += 1
      })
    },
    sendSave(postId, index) {
      fetch('/api/save/' + postId, {
        method: 'POST',
      }).then((response) => {
        console.log(response)
        this.instas[index].save += 1
      })
    },
  },
}
</script>
