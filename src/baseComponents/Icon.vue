<template>
  <span :class="[className, 'f-' + size]" :style="{color: color}">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#icon-' + name"></use>
    </svg>
  </span>
</template>

<script>

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: [Number, String],
        default: 48
      },
      className: String,
      color: String
    }
  }
</script>
