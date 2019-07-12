
<template>
  <div class="go-back" @click="onGoBack">
      <image :src="NavBackIcon" class="i-back" />
      <text class="i-title">返回</text>
  </div>
</template>
<script>
  const navigator = weex.requireModule('navigator');

  import { platform, appName} from '@/common/utils.js';
  import { NavBackIcon } from '@/common/cdnurl.js';

  export default {
    props: [

    ],
    data() {
      return {
        NavBackIcon
      };
    },
    methods: {
      onGoBack(event) {
          const options = {
            animated: true, // 关闭页面时使用动画效果
          };
          navigator.pop(options, (result) => {});
      },
    },
  };
</script>
<style scoped>
  .go-back {
    position: relative;
    flex-direction: row;
    height: 64px;
    align-items: center;
    justify-content: center;
  }
  .i-back {
    width: 48px;
    height: 48px;
  }
  
  .i-title {
    color: white;
    font-size: 36px;
  }

</style>
