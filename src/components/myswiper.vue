<template>
    <swiper :modules="modules" :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" :options="swiperOptions">
      <swiper-slide v-for="(items,index) in images"><img :src="items.picUrl"/></swiper-slide>
    </swiper>
  
  
  </template>
  
  <script>
    import  { Pagination,Autoplay } from 'swiper'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css'
    import 'swiper/css/pagination'
    
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination,Autoplay],
          swiperOptions: {
          slidesPerView: 'auto', // 每个滑块的视图数，也可以是一个数字
          loop: true // 开启循环模式
        },
        images: [
            {
              linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
              picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
              id: 11351
            },
            {
              linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
              picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
              id: 11372
            },
            {
              linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
              picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
              id: 11378
            },
            {
              linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
              picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
              id: 11375
            },
            {
              linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
              picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
              id: 11287
            }
          ]
        }
      }
    }
  </script>
  
  <style>
  
  </style>