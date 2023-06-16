<template>
  <div class="project" >
    <Advertisement text />
    <Menu/>
    <TitleVpnServer titleOne></TitleVpnServer>
      <About></About>
    <div class="blockClass">
      <Blocks v-bind="cardsOne"></Blocks>
      <Blocks v-bind="cardsTwo"></Blocks>
      <Blocks v-bind="cardsThree"></Blocks>
      <Blocks v-bind="cardsFour"></Blocks>
      <Blocks v-bind="cardsFive"></Blocks>
      <Blocks v-bind="cardsSix"></Blocks>
      <Blocks v-bind="cardsSeven"></Blocks>
    </div>

  </div>

</template>

<script>

import {defineComponent} from "vue";
import Advertisement from "@/components/Header/Advertisement.vue";
import Menu from "@/components/Header/Menu.vue";
import TitleVpnServer from "@/components/Body/TitleVpnServer.vue";
import About from "@/components/Body/About.vue";
import Blocks from "@/components/Body/Blocks.vue";

export default defineComponent({
  components: {Blocks, About, TitleVpnServer, Menu, Advertisement},
  data() {
    return{
      cardsOne:{
        id: 1,
        img: "../src/assets/body/about/processor.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Быстрые серверные процессоры INTEL® XEON® 2186g 3.8 GHz"
      },
      cardsTwo:{
        id: 2,
        img: "../src/assets/body/about/ssd.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Высокопроизводительные SSD-диски SAMSUNG и INTEL NVMe"
      },
      cardsThree:{
        id: 3,
        img: "../src/assets/body/about/os.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Поддержка разных ОС: CentOS, Debian, Ubuntu, Windows 2016r2"
      },
      cardsFour:{
        id: 4,
        img: "../src/assets/body/about/dataCenter.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Два независимых ЦОД. Добавьте еще текст."
      },
      cardsFive:{
        id: 5,
        img: "../src/assets/body/about/virtual.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Виртуализация VMWare\n" +
            "Добавьте текст."
      },
      cardsSix:{
        id: 6,
        img: "../src/assets/body/about/copy.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Резервное копирование Veeam Backup"
      },
      cardsSeven:{
        id: 7,
        img: "../src/assets/body/about/channels.svg",
        imgBlockOval: "../src/assets/body/about/blockOval.svg",
        text: "Каналы 200 Гбит/c. Добавьте еще текст."
      },
    }
  }
})
</script>

<style>
.project{
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.blockClass{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1360px;
  height: 461px;
  margin-left: 120px;
}

</style>
