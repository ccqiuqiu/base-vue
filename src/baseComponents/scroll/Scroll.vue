<!--Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/30.-->
<template>
  <div ref="wrapper" class="scroll-view">
    <div class="scroll-content" ref="listWrapper">
      <slot></slot>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <loading></loading>
          </div>
        </div>
      </slot>
    </div>

    <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :isPullingDown="isPullingDown"
          :bubbleY="bubbleY">
      <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown">
            <loading></loading>
          </div>
          <div v-else><span>{{refreshTxt}}</span></div>
        </div>
      </div>
    </slot>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Loading from './loading'
  import Bubble from './bubble.vue'
  import { getRect } from '$js/domUtils'

  const COMPONENT_NAME = 'scroll'
  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      keepLocation: {
        type: Boolean,
        default: true
      },
      click: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 1
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      scrollbar: {
        type: Boolean,
        default: true
      },
      pullDownRefresh: {
        type: Boolean,
        default: false
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      startY: {
        type: Number,
        default: 0
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      freeScroll: {
        type: Boolean,
        default: false
      },
      mouseWheel: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        beforePullDown: true,
        isRebounding: false,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        pullDownStyle: '',
        bubbleY: 0
      }
    },
    computed: {
      pullUpTxt() {
        const moreTxt = this.pullUpLoad && this.pullUpLoad.text && this.pullUpLoad.text.more || '加载更多'
        const noMoreTxt = this.pullUpLoad && this.pullUpLoad.text && this.pullUpLoad.text.noMore || '没有更多数据'
        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
      refreshTxt() {
        return this.pullDownRefresh && this.pullDownRefresh.text || '刷新成功'
      }
    },
    created() {
      this.pullDownInitTop = -50
    },
    mounted() {
      setTimeout(() => {
        this.initScroll()
      }, 20)
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // 如果开启了上拉和下拉刷新，处理内容不到一屏的时候，下拉上拉无效的问题
        if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
          this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
        }

        let options = {
          probeType: this.probeType,
          click: this.click,
          scrollY: this.freeScroll || this.direction === DIRECTION_V,
          scrollX: this.freeScroll || this.direction === DIRECTION_H,
          scrollbar: this.scrollbar,
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad,
          startY: this.startY,
          freeScroll: this.freeScroll,
          mouseWheel: this.mouseWheel
        }

        this.scroll = new BScroll(this.$refs.wrapper, options)

        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScrollStart')
          })
        }

        if (this.pullDownRefresh) {
          this._initPullDownRefresh()
        }

        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      destroy() {
        this.scroll.destroy()
      },
      forceUpdate(dirty) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        } else {
          this.refresh()
        }
      },
      _initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.$emit('pullingDown')
        })

        this.scroll.on('scroll', (pos) => {
          if (this.beforePullDown) {
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
          } else {
            this.bubbleY = 0
          }

          if (this.isRebounding) {
            this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
          }
        })
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
      },
      _reboundPullDown() {
        const {stopTime = 600} = this.pullDownRefresh
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isRebounding = true
            this.scroll.finishPullDown()
            resolve()
          }, stopTime)
        })
      },
      _afterPullDown() {
        setTimeout(() => {
          this.pullDownStyle = `top:${this.pullDownInitTop}px`
          this.beforePullDown = true
          this.isRebounding = false
          this.refresh()
        }, this.scroll.options.bounceTime)
      }
    },
    watch: {
      data() {
        this.$nextTick(() => this.forceUpdate(true))
      }
    },
    activated () {
      if (this.scroll) {
        // 只有当页面是后退，并且keepLocation为true的时候，才会恢复到上次滚动的位置，否则，滚动到顶部
        if (!this.keepLocation || !this.$route.meta.isBack) {
          this.y = 0
        }
        this.$nextTick(() => this.scrollTo(0, this.y))
      }
    },
    deactivated () {
      this.y = this.scroll.y
    },
    components: {Loading, Bubble}
  }

</script>

<style lang="less" scoped>
  .scroll-view{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;

    .scroll-content{
      position: relative;
      z-index: 10;
    }
    .pulldown-wrapper{
      font-size: 14px;
      position: absolute;
      width: 100%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all;
    }
    .pullup-wrapper{
      font-size: 14px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 0;
    }
  }
</style>
