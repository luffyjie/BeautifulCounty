 <template>
  <div class="item">
    <div class="link">
      <image class="town-image" :src="column.photo"></image>
      <text class="town-title">{{column.columnName}}</text>
      <div class="sub-info">
       <text class="sub-title">{{ column.subTitle }}</text>
       <text class="sub-distance">{{ column.subDesc }}</text>
      </div>
      <image class="arrow" :src="deitalArrow"></image>
    </div>
  </div>
 </template>

  <script>
  import { deitalArrow } from '@/common/cdnurl'
  const modal = weex.requireModule('modal')
  const navigator = weex.requireModule('navigator')
  
    export  default {
      props: ['column'],
      data: function () {
        return {
          deitalArrow
        }
      },
    }
 </script>

 <style scoped>
   .item {
     align-items: center;
     width: 750px;
     height: 120px;
     border-bottom-color: black;
     border-bottom-style: solid;
     border-bottom-width: 1px;
     margin-left: 15px;
   }
   .link {
     flex-direction: row;
     align-items: center;
     width: 750px;
     height: 120px;
   }
   .town-image {
     margin-left: 5px;
     width: 140px;
     height: 100px;
    }
    .town-title {
      color: black;
      font-size: 28px;
      font-weight: bold;
      margin-left: 30px;
    }
    .sub-info {
      position: absolute;
      right: 80px;
    }
    .sub-title {
      color: black;
      font-size: 24px;
      text-align: right;
    }
    .sub-distance {
      color: black;
      font-size: 24px;
      text-align: right;
      margin-top: 4px;
    }
    .arrow {
      position: absolute;
      right: 35px;
      width: 30px;
      height: 30px;
    }
 </style>