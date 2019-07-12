 <template>
    <slider class="size">
        <div v-for="photo in photos" :key="photo.id">
            <image class="size" :src="photo.path"></image>
        </div>
        <indicator class="indicator indicator-size"></indicator>
    </slider>
 </template>
 
 <style scoped>
  .size {
    width: 750px;
    height: 300px;
  }
  .indicator-size {
    width: 750px;
    height: 42px;
  }
  .indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    item-color: #DDDDDD;
    item-selected-color: #FF0000;
    item-size: 14px;
    background-color: rgba(0, 0, 0, 0.5);
  }
 </style>
 
 <script>
    export  default {
      props: ['photos'],
      data: function () {
        return {

        }
      }
    }
 </script>