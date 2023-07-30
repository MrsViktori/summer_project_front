<template>
  <div class="advertisement">
   <img src="../../assets/advertisement/new.svg" class="imgNew">
      <div class="advertisementText">{{ text }}</div>
    <img src="../../assets/advertisement/forward.svg" class="imgForward">
    <img src="../../assets/advertisement/close.svg" class="imgClose">
  </div>
</template>

<script>
export default {
  name: "Advertisement",
  data() {
    return {
      text: 'Открыт маркетплейс приложений. Получите готовый сервер с настроенным приложением в 2 клика '
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.advertisement{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #EFF5FF;
}
.advertisementText{
  font-family: OpenSans;
  display: flex;
  align-items: center;
  width: 652px;
  height: 24px;
  margin-left: 16px;
  color: #747C8B;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
}
.imgNew{
  width: 44px;
  height: 24px;
  margin-left: 120px;
}
.imgForward{
  width: 5px;
  height: 8px;
}
.imgClose{
  width: 12px;
  height: 12px;
  margin-left: 380px;
}

</style>