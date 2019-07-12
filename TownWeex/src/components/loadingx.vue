<template>
  <div class="loading">
    <image class="loading-pic" :src="loadingIcon" quality="original"></image>
    <text class="loading-tip">{{ tip }}</text>
  </div>
</template>

<script>
  // import { windowHeight } from '@/common/utils.js';
  import { iLoadingBig$gif } from '@/common/cdnurl.js';

  export default {
    props: {
      tip: {
        type: String,
        default: '加载中...'
      }
    },

    data() {
      return {
        // windowHeight,
        loadingIcon: iLoadingBig$gif
      };
    }
  };
</script>

<style scoped>
  .loading {
    align-items: center;
    background-color: white;
  }
  .loading-pic {
    width: 160px;
    height: 160px;
    margin-top: 367px;
    margin-bottom: 40px;
  }
  .loading-tip {
    color: #ff814b;
    font-size: 28px;
  }
</style>
