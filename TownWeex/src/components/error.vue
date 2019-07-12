<template>
  <div class="error">
    <image class="error-pic" :src="icon || iErrorImgUrl"></image>
    <text class="error-tip">{{tip || '网络开小差啦，刷新试试'}}</text>
    <div v-if="hasButton" :class="['error-button', isBigButton ? 'error-button-big' : 'error-button-common']" @click="onClick">
      <text class="error-button-text">{{buttonText || '刷新一下'}}</text>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  // import { windowHeight } from '@/common/utils.js';
  import { iError$png } from '@/common/cdnurl.js';

//   const location = weex.requireModule('location');

  export default {
    props: {
      icon: {
        type: String,
        default: iError$png
      },
      tip: {
        type: String,
        default: ''
      },
      hasButton: {
        type: Boolean,
        default: true
      },
      buttonText: {
        type: String,
        default: '刷新一下'
      },
      buttonAction: {
        type: Function,
        default() {
        //   location.reload();
        }
      },
      isBigButton: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        // windowHeight,
        iErrorImgUrl: iError$png,
      };
    },

    methods: {
      onClick() {
        if (this.buttonAction) {
          this.buttonAction();
        } else {
        //   location.reload();
        }
      }
    }
  };
</script>

<style scoped>
  .error {
    align-items: center;
    background-color: white;
  }
  .error-pic {
    width: 320px;
    height: 320px;
    margin-top: 287px;
    background-color: white;
  }
  .error-tip {
    margin-top: 30px;
    margin-bottom: 70px;
    color: #333;
    font-size: 28px;
    margin-left: 24px;
    margin-right: 24px;
  }
  .error-button {
    justify-content: center;
    align-items: center;
    height: 54px;
    border-width: 1px;
    border-color: #fd3000;
    border-radius: 27px;
    background-color: white;
    padding: 0 10px;
  }
  .error-button-common {
    /*width: 160px;*/
  }
  .error-button-big {
    padding-left: 24px;
    padding-right: 24px;
  }
  .error-button-text {
    color: #fd3000;
    font-size: 28px;
    padding: 0 10px;
    margin-left: 24px;
    margin-right: 24px;
  }
</style>

