<template>
  <svg version="1.1" :class="clazz" :role="label ? 'img' : 'presentation'" :aria-label="label" viewBox="0 0 1014 1024" :style="style">
    <path :d="path.d" :fill="path.fill" :stroke="path.stroke" v-for="(path, index) in icon.paths" :key="index"/>
  </svg>
</template>

<script>

  import SVGtoArray from '../assets/js/parseSvg'

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      size: [Number, String],
      spin: Boolean,
      rotate: {
        default: 0
      },
      flip: {
        validator: function (val) {
          return val === 'horizontal' || val === 'vertical'
        }
      },
      label: String,
      index: String,
      currentIndex: String
    },
    computed: {
      normalizedScale () {
        let size = this.size
        size = typeof size === 'undefined' ? 48 : Number(size)
        if (isNaN(size) || size <= 0) {
          console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this)
          return 48
        }
        return size
      },
      clazz () {
        return {
          ['rotate-' + this.rotate]: this.rotate,
          'svg-icon': true,
          spin: this.spin,
          'flip-horizontal': this.flip === 'horizontal',
          'flip-vertical': this.flip === 'vertical',
          active: this.index === this.currentIndex
        }
      },
      icon () {
        let xml = require(`!xml-loader!../assets/svg/${this.name}.svg`)
        const t = xml.svg.$.viewBox.split(' ')
        return {
          width: t[2],
          height: t[3],
          paths: SVGtoArray(xml.svg)
        }
      },
      style () {
        if (this.normalizedScale === 1) {
          return false
        }
        return {
          fontSize: this.normalizedScale / 100 + 'rem',
          width: this.normalizedScale / 100 + 'rem',
          height: this.normalizedScale / 100 + 'rem'
        }
      }
    },
    register: function () {
      console.warn('inject deprecated since v1.2.0, SVG files can be loaded directly, so just delete the inject line.')
    }
  }
</script>
<style scoped>
  .svg-icon {
    /*display: inline-block;*/
    fill: currentColor;
  }

  .svg-icon.flip-horizontal {
    transform: scale(-1, 1);
  }

  .svg-icon.flip-vertical {
    transform: scale(1, -1);
  }

  .svg-icon.spin {
    animation: fa-spin 1s 0s infinite linear;
  }
  .svg-icon.rotate-180{
    transform: rotate(180deg);
  }
  .svg-icon.rotate-90{
    transform: rotate(90deg);
  }
  .svg-icon.rotate-270{
    transform: rotate(270deg);
  }


  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
