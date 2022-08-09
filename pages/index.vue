<template>
  <div>
    <div class="min-h-screen bg-slate-100">
      <div class="relative flex h-full w-full justify-between">
        <div
          class="pb-8 text h-36 w-screen bg-gradient-to-r from-violet-400 to-purple-400 pl-36 pt-12 text-6xl font-black leading-10 text-white"
        >
          TO-DO LIST
        </div>
        <div class="absolute flex w-full place-content-end">
          <img
            class="h-36 pt-8 pb-8 pr-2"
            src="https://i.imgur.com/WllBuPB.png"
            alt=""
          />
          <span class="pr-36 pt-14 pb-14 pl-2 text-3xl text-white"
            >Vishaka</span
          >
        </div>
      </div>
      <div class="pl-20 pr-48">
        <div class="relative flex w-full justify-between pt-24 pl-96 pr-72">
          <input
            v-model="input"
            class="w-full rounded-2xl border pt-8 pb-8 pl-9 focus:border-blue-600 focus:outline-none"
            autocomplete=" on"
            placeholder=" Add new task"
            @keypress.enter="addToList()"
          />
          <div class="pr-16">
            <button
              class="absolute bottom-4 w-63 h-18 right-96 flex justify-between rounded-lg bg-gradient-to-r from-violet-400 to-purple-400 pt-4 pb-4 pl-8 pr-8 font-bold text-white"
            >
              Create task
              <img
                class="h-6 w-7 pl-2"
                src="https://i.imgur.com/X5tf72x.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      <div class="pl-16 pr-36">
        <div class="pt-12 mx-auto w-full px-96 relative">
          <ul>
            <li
              v-for="(item, index) of list"
              :key="item"
              class="border m-5 pt-4 top-4 pb-4 pl-2 pr-3 bg-white flex rounded-2xl justify-between text-lg font-semibold"
            >
              <span class="flex pt-2">
                <div class="pl-3 pt-2" @click="select(index)">
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
                  class="top-4 h-full pl-3 flex flex-wrap font-semibold"
                  :class="{
                    'line-through bg-border-blue-600': item.isChecked == true,
                  }"
                  >{{ item.taskName}}</span
                >
              </span>
              <span>
                <button
                  class="cursor-pointer p-2"
                  @click="
                    isOpen = true
                    currentIndex = index
                  "
                >
                  <img
                    class="h-7 pl-96 flex"
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
        class="h-60 w-96 border pt-16 text-center font-bold text-black rounded-3xl bg-white"
      >
        Do you really want to delete the task?
        <div class="pt-14 pr-10 pl-10 flex justify-between">
          <button
            class="py-4 px-8 pr-8 text-xs bg-gray-200 border rounded-xl"
            @click="isOpen = false"
          >
            No don’t delete
          </button>
          <button
            class="py-4 pl-8 px-12 pr-10 text-xs text-center bg-red-bt text-white border rounded-xl"
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
       
     const todo ={
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
    },
  }

</script>
