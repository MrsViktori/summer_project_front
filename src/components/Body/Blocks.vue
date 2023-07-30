<template>
  <div class="blocks">
    <div :class="id===4 ? 'backgroundTwo': 'backgroundOne'">
      <div class="sectionImg">
        <img class="sectionCardsImgOval" :src="imgBlockOval">
        <img class="sectionCardsImg" :src="img">
      </div>
      <span class="sectionCardsText">{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blocks",
    props: {
      id: {
        type: Number,
        required: true
      },
      img: {
        type: String,
        required: true
      },
      imgBlockOval:{
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.blocks{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 56px;
  margin-right: 32px;

}
.backgroundOne{
  width: 256px;
  height: 190px;
  background: #EFF5FF;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
}
.backgroundTwo{
  width: 256px;
  height: 190px;
  background: linear-gradient(45deg, #3F6DD6 0%, #2755C1 99.88%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
}
.sectionCardsText{
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #373633;
  width: 208px;
  height: 63px;
  margin-left: 24px;
}
.sectionImg{
  align-items: center;
  justify-content: center;
}
.sectionCardsImg{
  margin-left: -40px;
  margin-bottom: 8px;
  width: 32px;
  height: 32px;
}
.sectionCardsImgOval{
  margin-left: 26px;
}
</style>