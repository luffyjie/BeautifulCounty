<template>
  <div :class="['wrapper', 'wrapper-' + navKind() ]">
  <list class="list" show-scrollbar="false">
      <cell v-for="(article, i) in articles" :key="article.id" @click="jump(i)">
       <townListItem :article="article" />
      </cell>
    </list>
    <div class="navbar-wrapper">
      <navbar showGoBack="true" :pageTitle="columnName"/>
    </div>
  </div>
</template>

<script>
import indexSlider from '@/components/index-slider'
import townListItem from '@/components/town-list-item'
import navbar from '@/components/navbar'

import { navKind, urlParams } from '@/common/utils.js';
import { articleListAPI, detailPage, IPAddress } from '@/common/cdnurl.js';

const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
const stream = weex.requireModule('stream') || {};

export default {
  components: {
    indexSlider,
    townListItem,
    navbar
  },
  data () {
    return {
      navKind,
      columnId: urlParams.columnId,
      columnName: urlParams.columnName,
      articles: []
    }
  },
  created: function() {
    this.getData();
  },
  methods: {
   getData() {
     const self = this;
     stream.fetch({
        method: 'GET',
        url: articleListAPI + self.columnId,
        type:'json'
      }, function(ret) {
        if(ret.data.resultCode == 200){
          self.articles = ret.data.data;
          self.articles.forEach(element => {
            element.photo = IPAddress +"/" + element.photo;
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
      var article = this.articles[i];
      var page = encodeURI(detailPage + article.id + "&articleTitle=" + article.articleTitle);
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
    background-color:white;
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
