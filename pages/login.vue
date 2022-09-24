<template>
  <div>
    <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <video
          autoplay
          class="w-auto mx-auto h-28"
          src="https://i.imgur.com/I2YHIho.mp4"
          alt="Your Company"
        ></video>
        <h2
          class="mt-6 text-2xl font-bold tracking-tight text-center text-gray-900"
        >
          WELCOME TO ALL!
        </h2>
        <p class="mt-2 text-sm text-center text-gray-600">
          <a
            href="#"
            class="text-3xl font-light text-teal-700 hover:text-teal-500-500"
            >Sign into your Account</a
          >
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  v-model="user.username"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-teal-700 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <div class="mt-1">
                <input
                  v-model="user.password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full px-3 py-2 placeholder-teal-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-teal-700 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="pl-32">
              <button
                type="button"
                class="flex justify-center px-4 py-2 text-sm font-medium text-white bg-teal-700 border border-transparent rounded-md shadow-sm w-28 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
                @click="login()"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('local', { data: this.user }).then((result) => {
        console.log('logged In')
      })
    },
  },
}
</script>
