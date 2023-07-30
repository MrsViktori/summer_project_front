<template>
  <div class="titleVpnServer">
    <div class="titleItemLeft">
      <div class="titleText">
        <div class="textOne">
          <span class="textTitleOn">{{titleOne}}</span>
          <span class="textTitleTw">{{titleTwo}}</span>
        </div>
        <div class="textTwo">
          <span class="textDescriptionOne">{{descriptionOne}}</span>
          <span class="textDescriptionTwo">{{descriptionTwo}}</span>
        </div>
      </div>
      <div class="titleBtnPrice">
        <button class="titleBtn">
          <span class="textBtn">{{button}}</span>
        </button>
        <div class="textThree">
          <span class="textPrice">{{priceOne}}</span>
          <span class="textPriceOne">{{priceTwo}}</span>
          <span class="textPrice">{{priceThree}}</span>
        </div>

      </div>
    </div>
    <div class="titleItemRight">
      <img class="titleImg" :src="image">
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleVpnServer",
  data() {
    return{
      titleOne: "Виртуальный сервер VPS/VDS ",
      titleTwo: "с бесплатным периодом 7 дней",
      descriptionOne: "Гарантированное выделение ресурсов: ",
      descriptionTwo: "CPU, ОЗУ, дисков. Скорость канала 10 Гбит/сек.",
      button: "Попробовать бесплатно",
      priceOne: "от ",
      priceTwo: "130 ₽ ",
      priceThree: "/ мес",
      image: "./src/assets/body/title/server.svg"
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.titleVpnServer{
  background-color: #EFF5FF;
  width: 100%;
  height: 537px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 81px;
}
.titleText{
  display: flex;
  flex-direction: column;
  margin-left: 120px;
  margin-top: 81px;
  gap: 21px;
}
.textOne{
  font-family: Montserrat;
  width: 592px;
  height: 112px;
}
.textTitleOn{
  font-size: 34px;
  font-weight: 700;
  line-height: 56px;
  color: #2F5DC7;
}
.textTitleTw{
  font-size: 34px;
  font-weight: 700;
  line-height: 56px;
  color: #373633;
}
.textTwo{
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 64px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #373633;
}
.titleBtnPrice{
  margin-top: 103px;
  margin-left: 120px;
  display: flex;
  gap: 32px;
  align-items: center;
}
.titleBtn{
  width: 246px;
  height: 56px;
  border-radius: 4px;
  background: #FFCD2D;
  border: 1px solid #FFCD2D;
}
.textBtn{
  font-family: OpenSans;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #373633;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
}
.titleBtn:hover{
  background-color: white;
}
.textThree{
  display: flex;
  gap: 5px;
  width: 145px;
  height: 40px;
  font-family: Montserrat;
}
.textPrice{
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
}
.textPriceOne{
  font-size: 22px;
  font-weight: 600;
  line-height: 40px;
}
.titleItemRight{
  margin-top: 74px;
}
</style>