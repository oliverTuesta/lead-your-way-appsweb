<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { userService } from '../services/user.service';
</script>
<template>
  <HeaderComponent class="mb-5" />
  <div v-if="user">
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="text-900 font-bold text-6xl mb-4 text-center">{{ user.name }}</div>
      <div class="w-full flex justify-content-center">
        <img class="max-w-18rem border-round-md" :src="user.image" alt="Profile Picture" />
      </div>
      <div class="text-700 text-xl mb-6 text-center line-height-3">
        {{ user.description }}
      </div>

      <div class="surface-section p-5">
        <div class="font-medium text-3xl text-900 mb-3">Profile Information</div>
        <div class="text-500 mb-5">
          {{ user.description }}
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Name:</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ user.name }}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Email:</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ user.email }}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Phone:</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ user.phone }}
            </div>
          </li>
          <li
            class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"
          >
            <div class="text-500 w-6 md:w-2 font-medium">Bicycles</div>
            <div
              v-for="bicycle in user.bicycles"
              class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"
            >
              <ul class="list-none p-0 m-0">
                <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                  <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    {{ bicycle.model }} - {{ bicycle.description }}
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="text-900 font-bold text-6xl mb-4 text-center">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  // on mount call the api to get the user data
  mounted() {
    const id = localStorage.getItem('id');
    if (!id) {
      this.$router.push('/login');
    }
    userService.getById(id).then((response) => {
      this.user = response;
      console.log(this.user);
    });
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style scoped></style>
