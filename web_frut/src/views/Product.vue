<template>
    <section class="product_page">
      <div v-for="item in product_page " class="projects-item">
        <Product_page :product_page ="item"></Product_page>
      </div>
    </section>
</template>

<script>
import Product_page from "../components/Product_page ";

export default {
  name: "Product",
  components: {Product_page},
  data() {
    return {
      product_page: [
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
