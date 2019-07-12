<template>
    <scroller :class="['wrapper', 'wrapper-' + navKind() ]" show-scrollbar="false">
      <div class="sub-author">
        <text class="author">作者：{{ article.articleAuthor }}</text>
      </div>
      <slider class="slider" auto-play="false">
        <div v-for="photo in photos" :key="photo.id">
          <image class="sub-image" :src="photo.path" resize="stretch"></image>
        </div>
        <template v-if="photos.length > 1">
          <indicator class="indicator"></indicator>
        </template>
      </slider>
      <div class="article">
        <div class="main">
          <text class="paragraph">{{ article.content }}</text>
        </div>
      </div>
        <div class="navbar-wrapper">
          <navbar showGoBack="true" :pageTitle="articleTitle"/>
       </div>
    </scroller>
</template>

<script>
import navbar from '@/components/navbar'
import { navKind, urlParams } from '@/common/utils.js';
import { IPAddress, detailAPI, detailSliderAPI } from '@/common/cdnurl.js';

const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream') || {};

  export default {
  components: {
      navbar
    },
    data () {
      return {
        IPAddress,
        navKind,
        articleId: urlParams.articleId,
        articleTitle: urlParams.articleTitle,
        article: {},
        photos:[]
      }
    },
    created: function() {
      this.getData();
      this.getPhotos();
    },
    methods: {
      getData() {
      const self = this;
      stream.fetch({
          method: 'GET',
          url: detailAPI + self.articleId,
          type:'json'
        }, function(ret) {
          if(ret.data.resultCode == 200){
             self.article = ret.data.data;
          }else{
              modal.toast({
              message: ret.data.message,
              duration: 3
            });
          }
        });
      },
      getPhotos() {
      const self = this;
      stream.fetch({
          method: 'GET',
          url: detailSliderAPI + self.articleId,
          type:'json'
        }, function(ret) {
          if(ret.data.resultCode == 200){
            self.photos = ret.data.data;
            self.photos.forEach(element => {
              element.path = IPAddress +"/" + element.path;
            });
          }else{
              modal.toast({
              message: ret.data.message,
              duration: 3
            });
          }
        });
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .wrapper-iphone {
    padding-top: 128px;
  }

  .wrapper-iphoneX {
    padding-top: 176px;
    padding-bottom: 68px;
  }

  .wrapper-android {
    padding-top: 128px;
  }

  .wrapper-web {
    padding-top: 98px;
  }

  .navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .slider {
    width: 750px;
    height: 260px;
  }
  .sub-image {
    width: 750px;
    height: 260px;
  }

  .indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 690px;
    height: 40px;
    item-color: white;
    item-selected-color:red;
    item-size: 12px;
    /* background-color: rgba(0, 0, 0, 0.4); */
  }

  .sub-author {
    height: 80px;
    justify-content: center;
  }

  .author {
    text-align: right;
    font-size: 30px;
    color: black;
  }

  .article {
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .paragraph {
    line-height: 50px;
    color: black;
    font-size: 30px;
  }

</style>