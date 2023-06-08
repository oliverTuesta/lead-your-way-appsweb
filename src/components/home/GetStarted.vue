<template>
  <div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-orange-500 font-bold mb-3">
          <i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
        </div>
        <div class="text-900 font-bold text-5xl mb-3">{{$t('get-started-slogan')}}</div>
        <div class="text-700 text-2xl mb-5">
          {{$t('get-started-content')}}
        </div>
        <a href="/signup"
          ><Button
            label="Join Now"
            icon="pi pi-external-link"
            class="
              font-bold
              px-5
              py-3
              p-button-raised
              bg-orange-400
              border-orange-500
              p-button-rounded
              white-space-nowrap
            "
          ></Button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
