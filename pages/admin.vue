<template>
  <div class="mt-10">
    <table class="border-collapse table-auto w-full text-sm">
      <thead>
        <tr>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            id
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Name
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Photo
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Likes
          </th>

          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Shares
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Updated At
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-slate-800">
        <tr v-for="instagramapp of instas" :key="instagramapp.id">
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.id }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.username }}
          </td>

          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            <img :src="instagramapp.photo" class="h-12 w-auto" />
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.likes }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.shares }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            {{ instagramapp.updatedAt }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
          >
            <button @click="editPost(instagramapp)">Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showModal">
      <input v-model="currentInstagramapp.username" />
      <button @click="updatePost()">Save</button>
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
      currentPost: {},
    }
  },
  methods: {
    editPost(instagramapp) {
      this.currentInstagramapp = instagramapp
      this.showModal = true
    },
    updatePost() {
      console.log(this.Instagramapp)

      this.$axios
        .put('/api/admin/instas', this.Instagramapp)
        .then((result) => {
          console.log(result)
        })
    },
  },
}


</script>
