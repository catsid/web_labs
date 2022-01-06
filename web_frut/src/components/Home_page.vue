<template>
  <div>
    <div id="img_hero" class="div_hero_img">
      <img :src="hero_img"/>
    </div>

    <div class="div_hero">
      <h2 class="caption">Свежие орехи и сухофрукты</h2>
	  <h3 class="properties">для здорового питания</h3>
    </div>

</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.div_hero {
  max-width: 40%;
  margin-bottom: 350px;
  margin-top: 200px;
}

.div_hero h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 90px;
  font-weight: 500;
  line-height: 1;
  color: #636363;
  margin: 0;
  padding: 0;
}

.div_hero h6 {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #b68178;
  font-size: 11px;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 0;
}

.div_hero p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #636363;
  font-size: 16px;
  max-width: 60%;
  margin-left: auto;
}

#img_hero {
  float: right;
  position: relative;
  top: -140px;
  left: -50px;
}

.div_hero_img img {
  width: 650px;
}

.div_make {
  max-width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 160px;
}

.div_make h4 {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #636363;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 50px;
  padding: 0;
}

.div_make p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #636363;
  font-size: 16px;
  max-width: 60%;
  line-height: 21px;
  margin-left: auto;
  margin-bottom: 15px;
}

.div_coldy {
  max-width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 160px;
}

.div_coldy h4 {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #636363;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 50px;
  padding: 0;
}

.div_coldy p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #636363;
  font-size: 16px;
  max-width: 60%;
  line-height: 21px;
  margin-left: auto;
  margin-bottom: 15px;
}

.div_command {
  max-width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 550px;
}

.div_command h4 {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #636363;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 50px;
  padding: 0;
}

.div_command p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #636363;
  font-size: 16px;
  max-width: 60%;
  line-height: 21px;
  margin-left: auto;
  margin-bottom: 15px;
}

.img_command img {
  max-width: 45%;
}

.progr_loyalty {
  max-width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 160px;
}

.progr_loyalty h4 {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #636363;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 50px;
  padding: 0;
}

.progr_loyalty p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #636363;
  font-size: 16px;
  max-width: 60%;
  line-height: 21px;
  margin-left: auto;
  margin-bottom: 15px;
}

#img_coldy {
  float: left;
  position: relative;
  top: 290px;
}
</style>

