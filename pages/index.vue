<template>
  <div>
    <div class="min-h-screen bg-slate-100">
      <div class="relative flex justify-between w-full h-full">
        <div
          class="w-screen pt-12 pb-8 text-6xl font-black leading-10 text-white text h-36 bg-gradient-to-r from-violet-400 to-purple-400 pl-36"
        >
          TO-DO LIST
        </div>
        <div class="absolute flex w-full place-content-end">
          <img
            class="pt-8 pb-8 pr-2 h-36"
            src="https://i.imgur.com/WllBuPB.png"
            alt=""
          />
          <span class="pl-2 text-3xl text-white pr-36 pt-14 pb-14"
            >Vishaka</span
          >
        </div>
      </div>
      <div class="pl-20 pr-48">
        <div class="relative flex justify-between w-full pt-24 pl-96 pr-72">
          <input
            v-model="input"
            class="w-full pt-8 pb-8 border rounded-2xl pl-9 focus:border-blue-600 focus:outline-none"
            autocomplete=" on"
            placeholder=" Add new task"
            @keypress.enter="addToList()"
          />
          <div class="pr-16">
            <button
              class="absolute flex justify-between pt-4 pb-4 pl-8 pr-8 font-bold text-white rounded-lg bottom-4 w-63 h-18 right-96 bg-gradient-to-r from-violet-400 to-purple-400"
            >
              Create task
              <img
                class="h-6 pl-2 w-7"
                src="https://i.imgur.com/X5tf72x.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      <div class="pl-16 pr-36">
        <div class="relative w-full pt-12 mx-auto px-96">
          <ul>
            <li
              v-for="(item, index) of list"
              :key="item"
              class="flex justify-between pt-4 pb-4 pl-2 pr-3 m-5 text-lg font-semibold bg-white border top-4 rounded-2xl"
            >
              <span class="flex pt-2">
                <div class="pt-2 pl-3" @click="select(index)">
                  <input
                    v-if="item.isChecked == true"
                    class="flex cursor-pointer"
                    type="checkbox"
                  />
                  <input
                    v-if="item.isChecked == false"
                    class="flex cursor-pointer"
                    type="checkbox"
                  />
                </div>
                <span
                  class="flex flex-wrap h-full pl-3 font-semibold top-4"
                  :class="{
                    'line-through bg-border-blue-600': item.isChecked == true,
                  }"
                  >{{ item.taskName }}</span
                >
              </span>
              <span>
                <button
                  class="p-2 cursor-pointer"
                  @click="
                    isOpen = true
                    currentIndex = index
                  "
                >
                  <img
                    class="flex h-7 pl-96"
                    src="https://i.imgur.com/EHClZ0K.png"
                    alt=""
                  />
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-if="isOpen == true"
      class="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-80"
    >
      <div
        class="pt-16 font-bold text-center text-black bg-white border h-60 w-96 rounded-3xl"
      >
        Do you really want to delete the task?
        <div class="flex justify-between pl-10 pr-10 pt-14">
          <button
            class="px-8 py-4 pr-8 text-xs bg-gray-200 border rounded-xl"
            @click="isOpen = false"
          >
            No don’t delete
          </button>
          <button
            class="px-12 py-4 pl-8 pr-10 text-xs text-center text-white border bg-red-bt rounded-xl"
            @click="
              remove(currentIndex)
              isOpen = false
            "
          >
            Yes delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isOpen: false,
      currentIndex: 0,
      list: [],
      input: '',
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/todos').then(async (respose) => {
      this.list = await respose.json()
    })
  },


  methods: {
    addToList() {
      this.list.unshift({
        taskName: this.input,
        isChecked: false,

      })


      const todo = {
        taskName: this.input,
      }
      fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(todo),
      }).then((res) => console.log)
    },

  },

  select(index) {
    this.list[index].isChecked = !this.list[index].isChecked
  },

  remove(index) {
    this.list.splice(index, 1)
    this.input = ''
  },
}
</script>
