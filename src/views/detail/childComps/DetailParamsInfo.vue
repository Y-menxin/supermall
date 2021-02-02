<template>
  <div id="detailParamsInfo" v-if="Object.keys(itemParams).length !== 0">
    <table v-for="(item, index) in itemParams.rule.tables" :key="index">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table>
      <tr v-for="(item, index) in itemParams.info.set" :key="index">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
#detailParamsInfo {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
#detailParamsInfo table {
  width: 100%;
  border-collapse: collapse;
  border-bottom: 5px solid #f2f5f8;
}
#detailParamsInfo table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
#detailParamsInfo table tr {
  height: 42px;
}

.info-key {
  /*当value的数据量比较大的时候, 会挤到 key,所以给一个固定的宽度*/
  width: 95px;
}
.info-value {
  color: #eb4868;
}
</style>
