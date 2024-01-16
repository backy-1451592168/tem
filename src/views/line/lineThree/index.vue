<template>
  <div class="lineThree">
    <line-card :cardData="dataCardList"></line-card>
  </div>
</template>
<script>
import lineCard from "@/views/line/lineThree/lineCard.vue";
export default {
  components: { lineCard },
  data() {
    return {
      dataCardList: [
        {
          id: "A",
          title: "Hive",
          tableList: [],
          children: [
            {
              id: "A1",
              title: "A1",
              tableList: [
                { id: "A11", title: "数据表A11", links: ['C11', 'C12','C14'], color: 'rgb(84, 144, 255)' },
                { id: "A12", title: "数据表A12", links: ['C11'], color: 'rgb(84, 144, 55)' },
                { id: "A13", title: "数据表A13", links: ['C14', 'D13'], color: 'rgb(84, 44, 255)' },
              ],
            },
            {
              id: "B2",
              title: "B2",
              tableList: [
                { id: "B11", title: "数据表B11", links: [], color: 'rgb(84, 144, 255)' },
                { id: "B12", title: "数据表B12", links: [], color: 'rgb(84, 144, 255)' },
                { id: "B13", title: "数据表B13", links: ['D11'], color: 'rgb(84, 144, 255)' },
              ],
            },
          ],
        },
        {
          id: "C",
          title: "Mysql",
          tableList: [],
          children: [
            {
              id: "C1",
              title: "C1",
              tableList: [
                { id: "C11", title: "数据表C11", links: [], color: 'rgb(84, 144, 255)' },
                { id: "C12", title: "数据表C12", links: [], color: 'rgb(84, 144, 255)' },
                { id: "C13", title: "数据表C13", links: [], color: 'rgb(84, 144, 255)' },
                { id: "C14", title: "数据表C14", links: [], color: 'rgb(84, 144, 255)' }
              ],
            },
          ],
        },
        {
          id: "D",
          title: "Doris",
          tableList: [],
          children: [
            {
              id: "D1",
              title: "D1",
              tableList: [
                { id: "D11", title: "数据表D11", color: 'rgb(84, 144, 255)' },
                { id: "D12", title: "数据表D12", color: 'rgb(84, 144, 255)' },
                { id: "D13", title: "数据表D13", color: 'rgb(84, 144, 255)' },
              ],
            },
          ],
        },
      ],
    };
  },
  
};
</script>

<style lang="scss" scoped>
.lineThree {
  display: flex;
}
</style>