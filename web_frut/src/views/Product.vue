<template>
  <section class="product_page">
    <div v-for="item in product_card" class="projects-item">
      <Product_card :product_card="item"></Product_card>
    </div>
  </section>
</template>

<script>
import Product_card from "../components/Product_card";

export default {
  name: "Product",
  components: {Product_card},
  data() {
    return {
      product_card: [
        {
          id: 1,
          name: 'Миндаль сырой(100 гр.)',
          country: 'Страна происхождения: Таджикистан'
        },
        {
          id: 2,
          name: 'Финики королевские(100 гр.)',
          country: 'Страна происхождения: Израиль'
        },
        {
          id: 3,
          name: 'Кешью сырой(100 гр.)',
          country: 'Страна происхождения: Иран'
        }
      ]
    }
  },
}
</script>
