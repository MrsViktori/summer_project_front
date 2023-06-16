<template>
  <div class="about">
    <div class="sectionItemLeft">
      <div class="aboutTitleOne">
        <span class="textTitleOne">{{ titleOne }}</span>
        <span class="textTitleTwo">{{ descriptionTitle }}</span>
      </div>
      <div class="aboutTitleTwo">
        <span class="textTitleThree">{{ titleTwo }}</span>
        <div class="list">
          <div class="listOne">
            <img :src="imgOval" class="listImgOval">
            <span class="textListOne">{{ listOne }}</span>
          </div>
          <div class="listOne">
            <img :src="imgOval" class="listImgOval">
            <span class="textListOne">{{ listTwo }}</span>
          </div>
          <div class="listOne">
            <img :src="imgOval" class="listImgOval">
            <span class="textListOne">{{ listThree }}</span>
          </div>
          <div class="listOne">
            <img :src="imgOval" class="listImgOval">
            <span class="textListOne">{{ listFour }}</span>
          </div>
          <div class="listOne">
            <img :src="imgOval" class="listImgOvalFive">
            <span class="textListOne">{{ listFive }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionItemRight">
      <img class="aboutImgServer" :src="imgServer">
    </div>
  </div>
  <span class="sectionText">{{ titleThree }}</span>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      titleOne: "Что такое виртуальный сервер?",
      descriptionTitle: "Это физический сервер, разделенный с помощью виртуализации на несколько виртуальных серверов с гарантированным выделением ресурсов: оперативная память, процессор, IOPS. На каждый виртуальный сервер можно установить свою ОС: CentOS, Debian, Ubuntu, Windows.",
      titleTwo: "Дополнительные преимущества:",
      listOne: "Резервное копирование",
      listTwo: "Отказоустойчивость SLA 99,95%",
      listThree: "Безопасность",
      listFour: "Высокая скорость",
      listFive: "Удобный интерфейс управления",
      imgServer: "../src/assets/body/about/server.svg",
      imgOval: "../src/assets/body/about/oval.svg",
      titleThree: "Программно-аппаратные возможности VPS",
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.about {
  display: flex;
  flex-direction: row;
  border: 1px solid #D7DDEA;
  border-radius: 4px;
  margin-top: 77px;
  width: 1120px;
  height: 400px;
  margin-left: 120px;
}

.aboutTitleOne {
  margin-left: 32px;
  margin-top: 31px;
  height: 148px;
  display: flex;
  flex-direction: column;
}

.textTitleOne {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 26px;
  line-height: 40px;
  color: #373633;
  width: 491px;
  height: 40px;
}

.textTitleTwo {
  width: 792px;
  height: 84px;
  margin-top: 24px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #747C8B;
}

.aboutTitleTwo {
  margin-top: 48px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  height: 140px;
}

.textTitleThree {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  width: 855px;
  gap: 22px;
}

.listOne {
  display: flex;
  gap: 10px;
  align-items: center;
}

.textListOne {
  font-family: OpenSans;
  font-size: 16px;
  line-height: 24px;
  color: #373633;
  margin-right: 70px;
  font-weight: 500;
}

.listImgOvalFive {
  margin-left: 36px;
}

.sectionItemRight {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 53px;
  margin-left: 100px;
}
.sectionText{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  margin-left: 120px;
  margin-top: 56px;
}
</style>