<script setup></script>

<template>
  <div class="justify-content-center flex justify-center align-items-center h-screen">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="@/assets/imgages/logo.png" alt="Lead Your Way logo" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">{{ $t('loginpage-welcome') }}</div>
        <span class="text-600 font-medium line-height-3">{{ $t('loginpage-message2') }}</span>
        <a class="font-medium no-underline ml-2 text-orange-500 cursor-pointer" href="/signup">{{
          $t('login')
        }}</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">{{ $t('loginpage-email') }}</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">{{ $t('loginpage-password') }}</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <label for="password2" class="block text-900 font-medium mb-2">{{
          $t('loginpage-repeatpassword')
        }}</label>
        <InputText id="password2" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <a class="font-medium no-underline ml-2 text-orange-500 text-right cursor-pointer">{{
            $t('loginpage-forgot')
          }}</a>
        </div>

        <a href="/login"
          ><Button
            :label="$t('register')"
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
