<!--Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/9.-->
<template>
  <div>
    <div flex="cross:center main:justify" class="b-b m-b-32">
      <span class="f-24 f-b">{{flight.flyNo}}</span>
      <span>{{flight.duration}}</span>
    </div>
    <div flex="cross:center box:justify">
      <div flex="dir:top cross:center">
        <span class="f-42">{{flight.orgTime}}</span>
        <span class="f-24">{{flight.orgName}}</span>
      </div>
      <div class="m-h-20 fly-line">
        <div flex="dir:top cross:center">
              <span class="plane">
                {{flight.plane}}
              </span>
          <Icon name="plane" size="36" />
        </div>
      </div>
      <div flex="dir:top cross:center">
        <span class="f-42">{{flight.dstTime}}</span>
        <span class="f-24">{{flight.dstName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      flight: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style lang="less" scoped>
  .fly-line{
    height: 2px;
    background-color: #616161;
    position: relative;

    .plane{
      margin-bottom: -10px;
    }

    >div{
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, ~"calc(-100% + 19px)", 0);
    }
  }
</style>
