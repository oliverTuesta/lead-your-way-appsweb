import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'es',

  messages: {
    es: {
      lyw: 'Lead Your Way',
      'about-content':
        'Somos una compañía que ofrece una plataforma digital donde podrás encontrar bicicletas para todo tipo de usuarios Por lo que, lo que necesitas es una bicicleta tanto para practicar deporte o necesitas otro tipo de movilidad, en esta página encontrarás todo lo necesario de forma rápida, sencilla y segura. Además, nunca tendrás que preocuparte por no encontrar la bicicleta adecuada, en este lugar podrás encontrar lo que necesites según tus necesidades',
      'options-title': 'es la forma más fácil de buscar bicicletas para...',
      //'call-to-action-sub': '¡Encuentra tu bicicleta!',
      'option1':'Ruta',
      'option1-content':'La bicicleta de ruta se utiliza para describir bicicletas construidas para viajar a gran velocidad en carreteras pavimentadas. Sus características están pensadas para llevarte tan lejos y tan rápido como tus piernas lo permitan. Tienen un diseño con ángulos de asiento y frontales muy verticales, un eje pedalier alto y muy poca curvatura de la horquilla.',
      'option2':'Montaña',
      'option2-content':'Son bicicletas que, o bien carecen de suspensión o tienen un sistema de amortiguación delantera en la horquilla. Normalmente el recorrido de esta suspensión es de menos de 120mm, ya que están pensadas para rodar a toda velocidad por pistas y tramos sin asfaltar sin grandes desniveles ni obstáculos pronunciados.',
      'option3':'Ciudad',
      'option3-content':'Una bicicleta urbana se caracteriza por tener componentes simples pero resistentes a cualquier picadura. Su mantenimiento es más sencillo y por lo tanto económico. En comparación con una bicicleta de montaña suelen ser más pesadas y no requieres suspensiones para los recorridos en la ciudad.',
      'meet-our-team':'Conoce a nuestro equipo',
      'get-started-slogan': 'Únete a nuestra comunidad',
      'get-started-content': 'Crear una cuenta en Lead Your Way es muy fácil y te permitirá acceder a una amplia variedad de opciones de bicicletas. Además, al ser parte de nuestra comunidad, tendrás acceso a descuentos exclusivos, promociones especiales y podrás estar al tanto de las últimas novedades en el mundo de las bicicletas.',
      'login': 'Iniciar sesión',
      'register': 'Registrarse',
    },

    en: {
      lyw: 'Lead Your Way',
      'about-content':
        'We are a company that offers a digital platform where you can find bicycles for all types of users. So, what you need is a bicycle both to practice sports or you need another type of mobility, on this page you will find everything you need quickly, easily and safely. Also, you will never have to worry about not finding the right bike, in this place you can find what you need according to your needs',
      'options-title': 'is the easiest way to find bicycles for...',
      //'call-to-action-sub': 'Find your bike!',
      'option1':'Road',
      'option1-content':'The road bike is used to describe bicycles built to travel at high speed on paved roads. Its features are designed to take you as far and as fast as your legs will allow. They have a design with very vertical seat and front angles, a high bottom bracket and very little fork curvature.',
      'option2':'Mountain',
      'option2-content':'They are bicycles that either lack suspension or have a front suspension system in the fork. Normally the travel of this suspension is less than 120mm, since they are designed to roll at full speed on tracks and unpaved sections without large slopes or pronounced obstacles.',
      'option3':'City',
      'option3-content':'An urban bicycle is characterized by having simple but resistant components to any puncture. Its maintenance is simpler and therefore cheaper. Compared to a mountain bike they are usually heavier and do not require suspensions for city trips.',
      'meet-our-team':'Meet our team',
      'get-started-slogan': 'Join our community',
      'get-started-content': 'Creating an account on Lead Your Way is very easy and will allow you to access a wide variety of bicycle options. In addition, being part of our community, you will have access to exclusive discounts, special promotions and you will be able to keep up to date with the latest news in the world of bicycles.',
      'login': 'Login',
      'register': 'Sign up',
    },

    fr: {
      lyw: 'Lead Your Way',
      'about-content':
        'Nous sommes une entreprise qui propose une plateforme numérique où vous pouvez trouver des vélos pour tous les types d’utilisateurs. Donc, ce dont vous avez besoin est un vélo à la fois pour pratiquer des sports ou vous avez besoin d’un autre type de mobilité, sur cette page vous trouverez tout ce dont vous avez besoin rapidement, facilement et en toute sécurité. De plus, vous n’aurez jamais à vous soucier de ne pas trouver le bon vélo, dans cet endroit vous pouvez trouver ce dont vous avez besoin en fonction de vos besoins',
      'options-title': 'est le moyen le plus simple de trouver des vélos pour...',
      //'call-to-action-sub': 'Trouvez votre vélo!',
      'option1':'Route',
      'option1-content':'Le vélo de route est utilisé pour décrire les vélos construits pour voyager à grande vitesse sur des routes pavées. Ses caractéristiques sont conçues pour vous emmener aussi loin et aussi vite que vos jambes le permettront. Ils ont une conception avec des angles de siège et de face très verticaux, un boîtier de pédalier haut et très peu de courbure de fourche.',
      'option2':'Montagne',
      'option2-content':'Ce sont des vélos qui manquent de suspension ou qui ont un système de suspension avant dans la fourche. Normalement, le déplacement de cette suspension est inférieur à 120 mm, car ils sont conçus pour rouler à pleine vitesse sur des pistes et des sections non pavées sans grandes pentes ni obstacles prononcés.',
      'option3':'Ville',
      'option3-content':'Un vélo urbain se caractérise par des composants simples mais résistants à toute crevaison. Son entretien est plus simple et donc moins cher. Par rapport à un VTT, ils sont généralement plus lourds et ne nécessitent pas de suspensions pour les trajets en ville.',
      'meet-our-team':'Rencontrez notre équipe',
      'get-started-slogan': 'Rejoignez notre communauté',
      'get-started-content': 'Créer un compte sur Lead Your Way est très facile et vous permettra d’accéder à une grande variété d’options de vélo. De plus, en faisant partie de notre communauté, vous aurez accès à des réductions exclusives, à des promotions spéciales et vous pourrez vous tenir au courant des dernières nouvelles dans le monde du vélo.',
      'login': 'Connexion',
      'register': 'S’inscrire',
    },

    ja: {
      lyw: 'Lead Your Way',
      'about-content':
        '私たちは、すべてのタイプのユーザーのための自転車を見つけることができるデジタルプラットフォームを提供している会社です。したがって、あなたがスポーツを練習するために自転車を必要としているか、あなたは別のタイプのモビリティを必要としているかどうか、このページでは、あなたが必要とするすべてのものを迅速かつ簡単に安全に見つけることができます。また、あなたは決して適切な自転車を見つけることを心配する必要はありません、この場所では、あなたのニーズに応じて必要なものを見つけることができます',
      'options-title': 'は...のための自転車を見つける最も簡単な方法です',
      //'call-to-action-sub': 'あなたの自転車を見つける！',
      'option1':'道路',
      'option1-content':'ロードバイクは、舗装された道路で高速で移動するために作られた自転車を表すために使用されます。その特徴は、あなたの足が許す限り遠く、速くあなたを連れて行くように設計されています。彼らは非常に垂直なシートとフロントアングル、高いボトムブラケット、そして非常に少ないフォーク曲率を持つデザインを持っています。',
      'option2':'山',
      'option2-content':'それらはサスペンションを欠いているか、フォークに前部サスペンションシステムを備えています。通常、このサスペンションの移動は120mm未満であり、大きな傾斜や顕著な障害物のないトラックや未舗装の区間でフルスピードで走行するように設計されています。',
      'option3':'市',
      'option3-content':'都市の自転車は、どんなパンクにも耐えられるシンプルで丈夫なコンポーネントを持っていることを特徴としています。そのメンテナンスはよりシンプルで、したがってより安価です。マウンテンバイクと比較して、通常より重く、都市の旅行にはサスペンションは必要ありません。',
      'meet-our-team':'私たちのチームに会いましょう',
      'get-started-slogan': '私たちのコミュニティに参加してください',
      'get-started-content': 'Lead Your Wayでアカウントを作成するのはとても簡単で、様々な自転車のオプションにアクセスできます。また、私たちのコミュニティの一員になることで、独占的な割引、特別なプロモーションにアクセスでき、自転車の世界の最新ニュースを知ることができます。', 
      'login': 'ログイン',
      'register': '登録',
    },
  },

  // something vue-i18n options here ...
});

export default i18n;
