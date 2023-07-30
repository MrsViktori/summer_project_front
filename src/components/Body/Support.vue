<template>
  <div class="support">
    <div class="blockOne">
      <div class="blockOneText">
        <div class="title">
          <span class="textTitle">{{title}}</span>
          <span class="textTitleOdin">{{titleOne}}</span>
        </div>
        <div class="textBody">
          <span class="textPath">{{textPathOne}}</span>
          <span class="textPath">{{textPathTwo}}</span>
          <span class="textPath">{{textPathThree}}</span>
        </div>
        <img :src="img" class="blockOneImg">
      </div>
    </div>
    <div class="blockTwo">
      <!--<img :src="imgBackground" class="blockTwoBackground"> -->
      <span class="textTitleDva">{{titleTwo}}</span>
      <div class="blockTwoText">
        <div class="blockTextsOne">
          <span class="blockTitleOne">{{pathTitleOne}}</span>
          <span class="blockTextOne">{{pathTextOne}}</span>
        </div>
        <div class="blockTextsOne">
          <span class="blockTitleOne">{{pathTitleTwo}}</span>
          <span class="blockTextOne">{{pathTextTwo}}</span>
        </div>
        <div class="blockTextsOne">
          <span class="blockTitleOne">{{pathTitleThree}}</span>
          <span class="blockTextOne">{{pathTextThree}}</span>
        </div>
      </div>
      <div class="blockTwoLists">
        <div class="blockTwoList">
          <img :src="imgSupportOval">
          <span class="listOne">{{listOne}}</span>
        </div>
        <div class="blockTwoList">
          <img :src="imgSupportOval">
          <span class="listOne">{{listTwo}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
  data() {
    return{
      title: "Техническая поддержка ",
      titleOne: "24/7",
      textPathOne: "В отличие от других хостинг компаний мы оказываем полную техническую поддержку ",
      textPathTwo: "при переносе сайта, а также поддержку во время эксплуатации сайта. ",
      textPathThree: "Мы отвечаем на вопросы и решаем возникшие проблемы с сайтом.",
      titleTwo: "Почему мы лучшие",
      pathTitleOne: "Топ 3",
      pathTextOne: "Рекомендуемых \n" +
          "Яндекс.Кассой сервисов",
      pathTitleTwo: "Топ 2",
      pathTextTwo: "Рекомендуемых \n" +
          "хостинг-провайдеров 1С-Битрикс",
      pathTitleThree: "190 ед.",
      pathTextThree: "Cамый высокий \n" +
          "рейтинг 1С-Битрикс",
      listOne: "Cобственный ЦОД",
      listTwo: "Cобственный биллинг с автоматизацией работы с серверами по API VMWare vCenter",
      imgBackground: "../src/assets/body/support/support.svg",
      img: "../src/assets/body/support/imgSupport.svg",
      imgSupportOval: "../src/assets/body/support/supportOval.svg",
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.support{
  width: 100%;
  height: 782px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EFF5FF;

}
.blockOne{
  display: flex;
  flex-direction: column;
  width: 1120px;
  height: 228px;
  border: 1px solid #D7DDEA;
  border-radius: 4px;
  margin-top: 30px;
}
.blockOneText{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 30px;
  margin-top: 30px;
}
.title{
  display: flex;
  flex-direction: row;
}
.textTitle{
  width: 449px;
  height: 40px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #282828;
}
.textTitleOdin{
  width: 449px;
  height: 40px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #2CAD62;
  margin-left: -60px;
}
.textBody{
  width: 736px;
  height: 84px;
  font-family: OpenSans;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #747C8B;
  display: flex;
  flex-direction: column;
}
.blockOneImg{
  width: 150px;
  height: 150px;
  margin-left: 940px;
  margin-top: -116px;
}
.blockTwo{
  display: flex;
  flex-direction: column;
  background-image: url("../src/assets/body/support/support.svg");
  background-repeat: no-repeat;
  background-position: center center;
  width: 1120px;
  height: 350px;
  margin-top: 70px;
}
.textTitleDva{
  width: 277px;
  height: 40px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 26px;
  line-height: 40px;
  color: #ffffff;
  margin-top: 40px;
  margin-left: 35px;
}
.blockTwoText{
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-left: 35px;
}
.blockTextsOne{
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 98px;
  gap: 10px;
  margin-top: 40px;
}
.blockTitleOne{
  font-family: Montserrat;
  font-weight: 400;
  font-size: 40px;
  line-height: 32px;
  color: #FFCD2D;
  width: 137px;
  height: 32px;
}
.blockTextOne{
  font-family: OpenSans;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  height: 44px;
  width: 187px;
}
.blockTwoLists{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 35px;
  gap: 12px;
}
.blockTwoList{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.listOne{
  font-family: OpenSans;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
}
</style>