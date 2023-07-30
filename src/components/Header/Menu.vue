<template>
  <div class="menu">
    <div class="menuItemLeft">
      <img class="menuImgLogo" :src="logo">
      <div class="menuItem">
        <span class="menuText">{{product}}</span>
        <img class="menuImgChevronDown" :src="chevron_down">
      </div>
      <span class="menuTextClient">{{client}}</span>
    </div>
    <div class="menuItemRight">
      <div class="menuItem">
        <span class="menuText">{{support}}</span>
        <img class="menuImgChevronDown" :src="chevron_down">
      </div>
      <div class="menuPhone">
        <div class="menuImgPhone">
          <img class="menuImgPhoneRectangle" :src="rectangle">
          <img class="menuImgPhoneNumber" :src="phone_img">
        </div>
        <span class="menuTextPhone">{{phone}}</span>
      </div>
      <button class="menuButton" @click="goToLoginForm">
        <span class="menuTextButton">{{button}}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      product: "Продукты",
      client: "Клиенты",
      support: "Поддержка",
      phone: "+ 7 495 644-04-04",
      logo: "./src/assets/menu/logotype.svg",
      rectangle: "./src/assets/menu/rectangle.svg",
      phone_img: "./src/assets/menu/phone.svg",
      chevron_down: "./src/assets/menu/chevron down.svg",
      button: "Войти"
    }
  },
  methods: {
    goToLoginForm() {
      return this.$router.push('/loginForm')
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.menu{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #ffffff;
}
.menuItemLeft{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 120px;
}
.menuItemRight{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 206px;
}
.menuItem{
  display: flex;
  gap: 8px;
  margin-left: 58px;
}
.menuTextClient{
  margin-left: 50px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
}
.menuPhone{
  margin-left: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menuImgPhoneNumber{
  margin-left: -28px;
  margin-bottom: 12px;
}
.menuTextPhone{
  margin-left: 24px;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  font-family: OpenSans;
}
.menuButton{
  border: 1px solid #D7DDEA;
  width: 112px;
  height: 40px;
  background-color: white;
  margin-left: 52px;
  border-radius: 4px;
}
.menuButton:hover{
  background-color: #D7DDEA;
  cursor: pointer;
}
.menuText{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
}
.menuTextButton{
  font-family: OpenSans;
  font-size: 12px;
  line-height: 16px;
  color: #747C8B;
  text-transform: uppercase;
}
.menuTextButton:hover{
  color: white;
}
</style>