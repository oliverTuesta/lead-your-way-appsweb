import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'es',

  messages: {
    es: {
      lyw: 'Lead Your Way',
      'about-content':
        'Somos una compañía que ofrece una plataforma digital donde podrás encontrar bicicletas para todo tipo de usuarios Por lo que, lo que necesitas es una bicicleta tanto para practicar deporte o necesitas otro tipo de movilidad, en esta página encontrarás todo lo necesario de forma rápida, sencilla y segura. Además, nunca tendrás que preocuparte por no encontrar la bicicleta adecuada, en este lugar podrás encontrar lo que necesites según tus necesidades',
    },

    en: {
      lyw: 'Lead Your Way',
      'about-content':
        'We are a company that offers a digital platform where you can find bicycles for all types of users. So, what you need is a bicycle both to practice sports or you need another type of mobility, on this page you will find everything you need quickly, easily and safely. Also, you will never have to worry about not finding the right bike, in this place you can find what you need according to your needs',
    },

    fr: {
      lyw: 'Lead Your Way',
      'about-content':
        'Nous sommes une entreprise qui propose une plateforme numérique où vous pouvez trouver des vélos pour tous les types d’utilisateurs. Donc, ce dont vous avez besoin est un vélo à la fois pour pratiquer des sports ou vous avez besoin d’un autre type de mobilité, sur cette page vous trouverez tout ce dont vous avez besoin rapidement, facilement et en toute sécurité. De plus, vous n’aurez jamais à vous soucier de ne pas trouver le bon vélo, dans cet endroit vous pouvez trouver ce dont vous avez besoin en fonction de vos besoins',
    },

    ja: {
      lyw: 'Lead Your Way',
      'about-content':
        '私たちは、すべてのタイプのユーザーのための自転車を見つけることができるデジタルプラットフォームを提供している会社です。したがって、あなたがスポーツを練習するために自転車を必要としているか、あなたは別のタイプのモビリティを必要としているかどうか、このページでは、あなたが必要とするすべてのものを迅速かつ簡単に安全に見つけることができます。また、あなたは決して適切な自転車を見つけることを心配する必要はありません、この場所では、あなたのニーズに応じて必要なものを見つけることができます',
    },
  },

  // something vue-i18n options here ...
});

export default i18n;
