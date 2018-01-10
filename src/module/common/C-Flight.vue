<!--Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/9.-->
<template>
  <div>
    <div flex="cross:center main:justify" class="b-b m-b-32">
      <span class="f-b">{{flight.flyNo}}</span>
      <span>{{flight.duration}}</span>
    </div>
    <div flex="cross:center box:justify">
      <div flex="dir:top cross:center">
        <span class="f-42">{{flight.orgTime}}</span>
        <span>{{flight.orgName}}</span>
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
        <span>{{flight.dstName}}</span>
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
    height: 3Px;
    background-color: #616161;
    position: relative;

    .plane{
      margin-bottom: -6px;
    }

    >div{
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, ~"calc(-100% + 0.25rem + 1Px)", 0);
    }
  }
</style>
