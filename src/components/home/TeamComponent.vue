<script setup>
import DeveloperCard from '@/components/home/DeveloperCard.vue';
</script>

<template>
  <h2 id="title-team" class="text-center">
    <span class="typing-animation">{{ $t('meet-our-team') }}</span>
  </h2>
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
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTW2b65FGFNZHy2zLOW5gXtw-laKcwA92xrfQuIafyYuCowSXY_CuSNYFTWRdlmYPJMKA&usqp=CAU',
      },
      {
        name: 'Lucas Ruiz',
        role: 'CEO',
        image:
          'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg',
      },
      {
        name: 'Arnol Cáceres',
        role: 'Technical Leader',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyOzKHsoAHGZVjCBBevzs3xCDSSZ3pmJVN1-TyCoZXJITgbDYIlIun9WfMJAOsPFDp0o&usqp=CAU',
      },
      {
        name: 'Leonel Alessandro',
        role: 'Frontend Developer',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2_hhMAxjym0BYoDtlGfHf66u_A5iJu6jpg&usqp=CAU',
      },
    ],
  }),
};
</script>

<style scoped>
.typing-animation {
  font-family: Monospace;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 40px;
  white-space: nowrap;
  overflow: hidden;
}

.typing-animation::after {
  content: '|';
  display: inline-block;
  vertical-align: bottom;
  animation: cursor-blink 0.7s infinite;
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes typing-loop {
  0%,
  50% {
    width: 100%;
  }
  50.1%,
  100% {
    width: 0;
  }
}

.typing-animation::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  animation: typing 3s steps(40), typing-loop 10s infinite;
}
</style>
