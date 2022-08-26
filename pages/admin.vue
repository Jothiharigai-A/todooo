<template>
  <div class="mt-10 mx-20">
    <table
      class="border-collapse table-auto w-full bg-gradient-to-r from-blue-600 to-purple-400 text-sm px-4 border-l-4 border-r-4"
    >
      <thead>
        <tr>
          <th
            class="font-bold text-white border-b dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            id
          </th>
          <th
            class="border-b font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            Name
          </th>
          <th
            class="border-b font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            Photo
          </th>
          <th
            class="border-b font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            Likes
          </th>

          <th
            class="border-b font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            Shares
          </th>
          <th
            class="border-b font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            Save
          </th>
          <th
            class="border-b font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
          >
            Updated At
          </th>
          <div class="flex">
            <th
              class="pr-14 border-b flex font-bold text-white dark:border-slate-600 p-4 pl-8 py-5 dark:text-slate-200 text-left"
            >
              Actions
            </th>
            <button @click="addId(instagramapp)">
              <img
                class="h-7 w-7"
                src="https://i.imgur.com/YLTqqV2.png"
                alt=""
              />
            </button>
          </div>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-slate-800">
        <tr v-for="instagramapp of instas" :key="instagramapp.id">
          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.id }}
          </td>
          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.username }}
          </td>

          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            <img :src="instagramapp.photo" class="h-12 w-auto" />
          </td>
          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.likes }}
          </td>
          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.shares }}
          </td>
          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.save }}
          </td>
          <td
            class="border-b hover:bg-purple-200 hover:text-black hover:font-bold border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.updatedAt }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            <button
              class="text-white font-semibold hover:scale-x-125 rounded-2xl p-2 bg-gradient-to-r from-blue-600 to-purple-400"
              @click="editPost(instagramapp)"
            >
              Edit
            </button>
            <button
              class="text-white font-semibold hover:scale-x-125 rounded-2xl p-2 bg-gradient-to-r from-blue-600 to-purple-400"
              @click="deletePost(instagramapp)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="showModal"
      class="fixed flex flex-col h-96 w-[450px] top-64 left-[700px] space-y-3 bg-slate-100 border border-double rounded-2xl shadow-blue-700 shadow-2xl"
    >
      <div class="flex w-[450px] justify-between px-3 pt-5">
        <span class="font-semibold pt-3 pl-3"> USERNAME:</span>
        <input
          v-model="currentInstagramapp.username"
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> PHOTO:</span>
        <input
          v-model="currentInstagramapp.photo"
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> SHARE:</span>
        <input
          v-model="currentInstagramapp.shares"
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> SAVE:</span>
        <input
          v-model="currentInstagramapp.save"
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> UPDATE:</span>
        <input
          v-model="currentInstagramapp.updatedAt"
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div class="pl-44 pt-5">
        <button
          class="bg-blue-600 px-4 py-2 text-white border w-20 rounded"
          @click="updatePost()"
        >
          Save
        </button>
      </div>
      <button
        class="absolute w-6 h-6 bg-red-400 text-white border rounded-full shadow-2xl -top-5 -right-2"
        @click="showModal = false"
      >
        X
      </button>
    </div>
    <div
      v-if="showaddId"
      class="fixed flex flex-col h-96 w-[450px] top-64 left-[700px] space-y-3 bg-slate-100 border border-double rounded-2xl shadow-blue-700 shadow-2xl"
    >
      <div class="flex w-[450px] justify-between px-3 pt-5">
        <span class="font-semibold pt-3 pl-3"> USERNAME:</span>
        <input
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> PHOTO:</span>
        <input
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
        </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> LIKE:</span>
        <input
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> SHARE:</span>
        <input
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="flex w-[450px] px-3 justify-between">
        <span class="font-semibold pt-3 pl-3"> SAVE:</span>
        <input
          class="pt-0 font-medium h-10 w-64 bg-slate-100 border rounded-xl focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="pl-44 pt-5">
        <button class="bg-blue-600 px-4 py-2 text-white border w-20 rounded">
          Save
        </button>
      </div>

      <button
        class="absolute w-6 h-6 bg-red-400 text-white border rounded-full shadow-2xl -top-5 -right-2"
        @click="showaddId = false"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  async asyncData({ $axios }) {
    const response = await $axios.get('/api/admin/instas')

    return {
      instas: response.data.instas,
      showModal: false,
      showaddId: false,
      currentInstagramapp: {},
      crntInstagramapp: {},
    }
  },
  methods: {
    editPost(instagramapp) {
      this.currentInstagramapp = instagramapp
      this.showModal = true
    },
    updatePost() {
      console.log(this.currentInstagramapp)

      this.$axios
        .put('/api/admin/instas', this.currentInstagramapp)
        .then((result) => {
          console.log(result)
        })
    },
    deletePost(instagramapp) {
      console.log(this.currentInstagramapp)

      this.$axios
        .delete('/api/admin/instas', this.currentInstagramapp)
        .then((result) => {
          console.log(result)
        })
    },

    addId(instagramapp) {
      this.crntInstagramapp = instagramapp
      this.showaddId = true
    },
  },
}
</script>
