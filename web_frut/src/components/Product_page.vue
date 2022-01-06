<template>
        <a href="pr_niceloft.html"><div class="products">
          <h3>Миндаль сырой(100 гр.)</h3>
          <p>Страна происхождения: Таджикистан</p>
        </div></a>
</template>

<script>
export default {
  name: "Product_card",
  props: ['product_card'],
}
</script>

<style scoped>

.products {
  height: 820px;
  background: url(/frontend/src/assets/pr_niceloft.png) rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  padding: 0;
}

.products h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 90px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  margin: 0;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
}

.products p {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  padding-left: 20px;
  margin: 0;
}

</style>

