<template>
  <div class="footer bg-orange-50 text-gray-100 p-3 flex
      justify-content-between
      lg:justify-content-center
      align-items-center
      flex-wrap">
    <div class="font-bold mr-8 text-medium text-gray-700">&copy; Lead Your Way 2023</div>
    <a v-ripple class="flex items-center no-underline justify-center border-circle text-gray-50 hover:bg-gray-400 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width: 2rem; height: 2rem">
      <i class="text-gray-700 pi pi-twitter"></i>
    </a>
  </div>
</template>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>