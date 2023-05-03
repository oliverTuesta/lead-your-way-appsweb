<template>
  <div class="text-center w-23rem mx-auto">
    <h2>Contact Us</h2>
    <p>Please fill out the form below to get in touch with us:</p>
    <form class="m-3 flex-row" v-on:submit.prevent="submitForm" :class="{ 'form-complete': !formIncomplete }" >
      <InputText v-model="name" placeholder="Name" class="w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />
      <InputText v-model="email" placeholder="Email" class="my-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />
      <Textarea v-model="message" placeholder="Message" rows="5" class="mb-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />
      <Button label="Send" type="submit" :class="formIncomplete ? 'bg-gradient-to-r from-red-500 to-red-700': 'bg-gradient-to-r from-green-500 to-blue-500 transition duration-500'" class="w-full" ></Button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const formSubmitted = ref(false);

    // Computed property that checks if any of the form fields are empty
    const formIncomplete = computed(() => {
      return !name.value || !email.value || !message.value;
    });

    function isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function submitForm() {
      if (formIncomplete.value) {
        console.log('Form incomplete!');
        return;
      } else if (!isValidEmail(email.value)) {
        console.log('Invalid email!');
        alert('Invalid email!');
        return;
      }

      console.log('Form submitted!');
      formSubmitted.value = true;
    }

    return {
      name,
      email,
      message,
      formIncomplete,
      formSubmitted,
      submitForm,
    };
  },
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

input[type="email"],
input[type="text"],
textarea {
  border-radius: 5px;
  padding: 0.5rem;
  transition: border-color 0.5s;
}

Button:focus {
  box-shadow: 0 0 5px rgba(245, 245, 245, 0);
}

.bg-gradient-to-r.from-red-500.to-red-700 {
  background: linear-gradient(to right, #E16F58, #EF4444);
  border: none;
  color: #FFF;
}

.bg-gradient-to-r.from-green-500.to-blue-500 {
  background: linear-gradient(to right, #34D399, #3B82F6);
  border: none;
  color: #FFF;
}

.f-incomplete:hover,.f-incomplete:focus {
  border-color: #EF4444 !important;
  box-shadow: 0 0 5px #EF4444 !important;
}

.f-complete:hover,.f-complete:focus {
  border-color: #3B82F6 !important;
  box-shadow: 0 0 5px #3B82F6 !important;
}

.form-complete .f-complete {
  color: #3B82F6;
}

</style>