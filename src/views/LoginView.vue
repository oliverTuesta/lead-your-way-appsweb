<script setup></script>

<template>
  <div class="justify-content-center flex justify-center align-items-center h-screen">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="@/assets/imgages/logo.png" alt="Lead Your Way logo" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">{{ $t('welcome') }}</div>
        <span class="text-600 font-medium line-height-3">{{ $t('no-account') }}</span>
        <a class="font-medium no-underline ml-2 text-orange-500 cursor-pointer" href="/signup">{{
          $t('create-today')
        }}</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">{{ $t('email') }}</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">{{ $t('password') }}</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
            <label for="rememberme1">{{ $t('remember-me') }}</label>
          </div>
          <a class="font-medium no-underline ml-2 text-orange-500 text-right cursor-pointer">{{
            $t('forgot-password')
          }}</a>
        </div>

        <a href="/search"
          ><Button
            :label="$t('login')"
            icon="pi pi-user"
            class="w-full bg-orange-400 border-orange-200"
          ></Button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: false,
  }),
};
</script>
