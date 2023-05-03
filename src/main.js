import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Panel from 'primevue/panel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import SplitButton from 'primevue/splitbutton';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';

import i18n from './locales/i18n';

import './assets/main.css';

const app = createApp(App);

// app.component for all the vue prime components
app.component('Panel', Panel);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputMask', InputMask);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('SplitButton', SplitButton);
app.component('Toolbar', Toolbar);
app.component('Card', Card);

app.use(PrimeVue);
app.use(i18n);
app.use(router);

app.use(router);
app.use(i18n);
app.use(PrimeVue);

app.mount('#app');
