<template>
  <div :class="['navbar-'+ navKind(), 'navbar']">
    <div :class="['navItem', 'navItem-'+ navKind()]">
    <template v-if="showGoBack === 'true'">
      <go-back class="left-content" />
    </template>  
      <text class="sub-title">{{ title }}</text>
    </div>
  </div>
</template>
<script>
  import GoBack from '@/components/go-back.vue';
  import { navKind } from '@/common/utils.js';

  export default {
    components: {
      GoBack
    },
    props: [
      'pageTitle',
      'pageFrom', // 页面来源
      'showGoBack', // 显示返回按钮
      'showAbout', // 显示右侧关于按钮
    ],
    data() {
    return {
         navKind,
         title: this.pageTitle
        }
    },
    methods: {
      goBack(e) {
        GoBack.methods.goBack(e);
      },
    }
  };
</script>
<style scoped>
  .navbar {
    width: 750px;
    background-color: #305E8B;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.1);  /* native 里用 border-bottom: none; 来覆盖不生效 */
  }

  .navbar-iphone {
    height: 128px;
  }

  .navbar-iphoneX {
    height: 176px;
   }

   .navbar-android {
     height: 128px;
    }

   .navbar-web {
     height: 98px;
    }

    .navItem {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .navItem-iphone {
      margin-top: 40px;
      height: 88px;
    }

    .navItem-iphoneX {
      margin-top: 88px;
      height: 88px;
    }

    .navItem-android{
      margin-top: 40px;
      height: 88px;
    }

    .navItem-web {
      height: 98px;
    }

  .left-content {
    position: absolute;
    left: 20px;
  }
  
  .sub-title {
    color: white;
    font-size: 36px;
    font-weight: bold;
    max-width: 400px;
    max-height: 64px;
    lines:1;
  }

</style>
