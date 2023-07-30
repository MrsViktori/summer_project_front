<template>
  <div class="opportunities">
    <div class="opportunitiesBlock">
    <span class="opportunitiesTitle">{{title}}</span>
    <div class="opportunitiesBlocks">
      <div class="opportunitiesList">
        <div class="opportunitiesListOne">
          <img :src="listImgCircle" class="opportunitiesListOneImg">
          <span class="opportunitiesListOneText">{{listOne}}</span>
        </div>
        <div class="opportunitiesListOne">
          <img :src="listImgCircle" class="opportunitiesListOneImg">
          <span class="opportunitiesListOneText">{{listTwo}}</span>
        </div>
        <div class="opportunitiesListOne">
          <img :src="listImgCircle" class="opportunitiesListOneImg">
          <span class="opportunitiesListOneText">{{listThree}}</span>
        </div>
        <div class="opportunitiesListOne">
          <img :src="listImgCircle" class="opportunitiesListOneImg">
          <span class="opportunitiesListOneText">{{listFour}}</span>
        </div>
        <div class="opportunitiesListOne">
          <img :src="listImgCircle" class="opportunitiesListOneImgOne">
          <span class="opportunitiesListOneText">{{listFive}}</span>
        </div>
      </div>
      <img :src="listImg" class="opportunitiesImg">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "opportunitiesVPN",
  data(){
    return{
      title: "Включенные возможности VPS",
      listOne: "Безлимитный трафик 1 Гбит/c",
      listTwo: "Балансировщик нагрузки",
      listThree: "Статический IP",
      listFour: "Резервное копирование",
      listFive: "Мониторинг Zabbix",
      listImg: "../src/assets/body/opportunitiesVPN/opportunitiesVPN.svg",
      listImgCircle: "../src/assets/body/support/supportOval.svg",
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.opportunities{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 225px;
  margin-top: 50px;
}
.opportunitiesBlock{
  width: 1066px;
  height: 182px;
}
.opportunitiesTitle{
  width: 481px;
  height: 40px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #373633;
  display: flex;
  justify-content: flex-start;
}
.opportunitiesBlocks{
  display: flex;
  flex-direction: row;
}
.opportunitiesList{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  width: 740px;
  height: 88px;
  margin-top: 50px;
}
.opportunitiesListOne{
  display: flex;
  gap: 10px;
  height: 24px;
  align-items: center;
}
.opportunitiesListOneImg{
  width: 10px;
  height: 10px;
}
.opportunitiesListOneImgOne{
  width: 10px;
  height: 10px;
  margin-left: 48px;
}
.opportunitiesListOneText{
  font-family: OpenSans;
  font-size: 16px;
  line-height: 24px;
  color: #373633;
}

.opportunitiesImg{
  width: 185px;
  height: 181px;
  margin-top: -20px;
}
</style>