<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
</script>
<template>
  <HeaderComponent class="mb-5" />
  <div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="text-900 font-bold text-6xl mb-4 text-center">{{ $route.params.username }}</div>
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
            <div class="text-500 w-6 md:w-2 font-medium">First Name:</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ user.firstName }}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Last Name:</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ user.lastName }}
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
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        description: 'this is a description',
        email: 'john@mail.com',
        phone: '1234567890',
        bicycles: [
          {
            model: 'giant',
            description: 'this is a giant bicycle',
            price: 1000,
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
