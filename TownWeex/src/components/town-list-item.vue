 <template>
  <div class="item">
      <div class="sub-item">
        <text class="sub-title">{{ article.articleTitle }}</text>
      </div>
      <div class="sub-summary">
         <text class="summary">{{ article.content }}</text>
      </div>
      <image class="sub-image" :src="article.photo" resize="stretch"></image>
      <div class="bottom-line"></div>
  </div>
 </template>
 
 <style scoped>
   .item {
     width: 750px;
     height: 200px;
     flex-direction: row;
     align-items: center;
   }
    .sub-item {
     width: 50px;
     height: 180px;
     background-color: rgb(200, 64, 64);
     border-top-right-radius: 12px;
     border-bottom-right-radius: 12px;
     align-items: center;
     justify-content: center;
    }
    .sub-title {
      color: white;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      max-height: 160px;
      max-width: 40px;
    }
    .sub-summary {
      position: absolute;
      left: 80px;
      right: 220px;
    }
    .summary {
      color: black;
      font-size: 28px;
      lines:4;
      max-height: 180px;
    }
   .sub-image {
    position: absolute;
    right: 15px;
    width: 175px;
    height: 180px;
    }
    .bottom-line {
      position: absolute;
      height: 1px;
      bottom: 1px;
      left: 13px;
      right: 0;
      background-color: black;
    }
 </style>

 <script>
  import { iDetailArrow$png } from '@/common/cdnurl'
    export  default {
      props: ['article'],
    }
 </script>