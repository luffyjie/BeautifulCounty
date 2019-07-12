<template>
  <div :class="['wrapper', 'wrapper-' + navKind() ]">
    <scroller show-scrollbar="false" v-if="!preLoading && !hasError" >
      <indexSlider :photos="photos"> </indexSlider>
      <div class="list" v-for="(column, i) in items" :key="column.id" @click="jump(i)">
        <indexListItem :column="column"></indexListItem>
      </div>
      <div class="navbar-wrapper">
        <navbar pageTitle="凤凰民俗" />
      </div>
     </scroller>
     <loadingx v-if="preLoading"/>
     <error v-if="hasError" :tip="tip" :hasButton="hasButton" :icon="icon"/>
  </div>
</template>

<script>
import loadingx from '@/components/loadingx'
import error from '@/components/error'
import indexSlider from '@/components/index-slider'
import indexListItem from '@/components/index-list-item'
import navbar from '@/components/navbar'

import { navKind } from '@/common/utils.js';
import { IPAddress, columnListAPI, sliderAPI, townPage } from '@/common/cdnurl.js';

const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
const stream = weex.requireModule('stream') || {};

export default {
  name: 'app',
  components: {
    loadingx,
    error,
    indexSlider,
    indexListItem,
    navbar
  },
  data () {
    return {
      preLoading: true,
      hasError: false,
      navKind,
      items:[],
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
        url: columnListAPI + "1",
        type:'json'
      }, function(ret) {
        self.preLoading = false;
        if(ret.data.resultCode == 200){
          self.items = ret.data.data;
          self.items.forEach(element => {
            element.photo = IPAddress +"/" + element.photo;
          });
        }else{
            modal.toast({
            message: ret.data.message,
            duration: 3
          });
          self.hasError = true;
        }
      });
    },
    getPhotos() {
     const self = this;
     stream.fetch({
        method: 'GET',
        url: sliderAPI,
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
    },
      jump(i) {
      var column = this.items[i];
      var page = encodeURI(townPage + column.id + "&columnName=" + column.columnName);
      navigator.push({
            url: page,
            animated: "true"
          })
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

  .list {
    background-color: white;
  }

  .navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
