<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { userService } from '../services/user.service';
import { bicycleService } from '../services/bicycle.lyw.service';
</script>
<template>
  <HeaderComponent class="mb-5" />
  <div v-if="user">
    <Toast />
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
                    {{ bicycle.name }} - {{ bicycle.description }}
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
    <div class="px-4 py-8 md:px-6 lg:px-8 bgColor">
      <div class="text-900 font-bold text-6xl mb-4 text-center">
        <img
          src="https://art.pixilart.com/ec39f926a73a5eb.gif"
          alt="Lead Your Way logo"
          class="mb-3 gifImg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  async mounted() {
    const id = localStorage.getItem('id');
    const hash = window.location.hash;

    if (!id) {
      this.$router.push('/login');
    }
    if (hash === '#login') {
      this.$toast.add({
        severity: 'success',
        summary: 'Exito',
        detail: 'Ingreso con exito!\nBienvendio a Lead Your Way!',
        life: 3000,
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      this.$toast.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Ahora puede actualizar su perfil',
        life: 5000,
      });
    }
    await userService.getById(id).then((response) => {
      this.user = response;
    });
    await bicycleService.getByUserId(id).then((response) => {
      this.user.bicycles = response;
    });
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style scoped>
.gifImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bgColor {
  background-color: #f5f5f5;
}
</style>
