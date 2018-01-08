<template>
  <svg :class="['icon', className, 'f-'+size]" :style="{color: color}" aria-hidden="true">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script>

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 56
      },
      className: String,
      color: String
    }
  }
</script>
