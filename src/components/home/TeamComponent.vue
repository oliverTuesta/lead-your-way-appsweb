<script setup>
import DeveloperCard from '@/components/home/DeveloperCard.vue';
</script>

<template>
  <h2 class="text-center text-2xl">Meet Our Team</h2>
  <div class="card-container flex-wrap flex gap-4 justify-content-center">
    <DeveloperCard
      v-for="developer in developers"
      :key="developer.name"
      :name="developer.name"
      :role="developer.role"
      :image="developer.image"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    developers: [
      {
        name: 'Oliver Tuesta',
        role: 'CTO',
        image: 'https://i.pinimg.com/564x/f9/19/54/f9195412cb2c7cb4de5a1d412299b2dd.jpg',
      },
      {
        name: 'Lucas Ruiz',
        role: 'CEO',
        image: 'https://i.pinimg.com/736x/6c/5d/5b/6c5d5bce6c2fbee5c2457ff94c197473.jpg',
      },
      {
        name: 'Leonel Messi',
        role: 'Programador practicante',
        image:
          'https://img.asmedia.epimg.net/resizer/-R9iNsfOFBn6x1cROz6pji9PpTI=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/OJFDKNIX5ZCX5GQGPOVE46AROA.jpg',
      },
    ],
  }),
};
</script>

<style scoped></style>
