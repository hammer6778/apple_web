
<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
      <img src="../assets/logo.png" alt="Apple" class="logo" />
      <ul class="nav-links">
        <li v-for="(item, index) in navLinks" :key="index">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
      <div class="user-actions">
        <button v-on:click="goToAboutUs()">Login</button>
        <button>Cart</button>
      </div>
    </nav>
    <!-- Banner -->
    <div class="banner">
      <h1 class="centered-text" :class="{ 'pushed-out': isTextVisible }">Welcome to Apple</h1>
      <p>Discover the latest innovations from Apple</p>
      <button>Learn More</button>
    </div>
    <!-- Featured Products -->
    <section class="products">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <div v-for="(product, index) in items" :key="index" class="product-card" @click="goToDetailPage(product.image)">
          <img :src="product.image" alt="Product" />
          <h3>{{ product.title }}</h3>
          <!-- <p>{{ product.price }}</p> -->
          <div class="price">{{ product.price }}</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </section>
    <section>
      <swiper :modules="modules" :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" :options="swiperOptions">
        <swiper-slide v-for="(items, index) in products"><img :src="items.image" /></swiper-slide>
      </swiper>
    </section>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <ul class="footer-links">
          <li v-for="(item, index) in footerLinks" :key="index">
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="copyright">
        &copy; 2024 Apple Inc. All rights reserved.
      </div>
    </footer>
  </div>
</template>


<script>

import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'


import { fetchItems, addItem } from '@/services/api';
import axios from 'axios';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items:[],
      modules: [Pagination, Autoplay],
      swiperOptions: {
        slidesPerView: 'auto', // 每个滑块的视图数，也可以是一个数字
        loop: true // 开启循环模式
      },
      isScrolled: false, // 标记页面是否滚动
      isTextVisible: false, // 标记文字是否可见
      navLinks: [
        { label: "Mac", url: "#" },
        { label: "iPad", url: "#" },
        { label: "iPhone", url: "#" },
        { label: "Watch", url: "#" },
        { label: "TV", url: "#" },
        { label: "Music", url: "#" },
        { label: "Support", url: "#" }
      ],
      products: [
        { name: "iPhone 13", description: "The most powerful iPhone ever.", price: "$699", image: require("../assets/x1.jpeg") },
        { name: "MacBook Pro", description: "Unleash your creativity.", price: "$1299", image: require("../assets/x2.jpeg") },
        { name: "iPhone 13", description: "The most powerful iPhone ever.", price: "$699", image: require("../assets/x3.jpeg") },
        { name: "MacBook Pro", description: "Unleash your creativity.", price: "$1299", image: require("../assets/x4.jpeg") },
        // { name: "iPhone 13", description: "The most powerful iPhone ever.", price: "$699", image: require("../assets/x5.jpeg") },
        // { name: "MacBook Pro", description: "Unleash your creativity.", price: "$1299", image: require("../assets/x6.jpeg") },
       

      ],
      footerLinks: [
        { label: "Privacy Policy", url: "#" },
        { label: "Terms of Use", url: "#" },
        { label: "Sales and Refunds", url: "#" },
        { label: "Legal", url: "#" },
        { label: "Site Map", url: "#" }
      ]
    };
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener("scroll", this.handleScroll);
    this.loadItems();
  },
  beforeDestroy() {
    // 移除滚动事件监听器
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    loadItems() {
      const params = { 
        // client_id: 'VeUIZPWc6I1ZPe7zviYdjIJ5JQ0O6nWCJWecOU',
      }
      axios.get(' https://mock.mengxuegu.com/mock/666be8e1be17764121dfbdcd/goods/goods_list', { params })
        .then(response => {

          console.log('ddddd')
          console.log(response)
          this.items = response.data;
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    },
    handleScroll() {
      // 当页面滚动时更新 isScrolled 的值
      this.isScrolled = window.scrollY > 0;
      // 检查文字是否在屏幕中间
      this.checkTextVisibility();
    },
    checkTextVisibility() {
      const textElement = document.querySelector(".centered-text");
      if (!textElement) return;

      const textRect = textElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 文字顶部超出屏幕一半且底部在屏幕内时显示动画
      this.isTextVisible = textRect.top > 0 && textRect.bottom < windowHeight;

      // console.log(this.isTextVisible);
      

    },

    goToDetailPage(idx) {
      console.log(idx);
      //通过 query 传参,path-query
      this.$router.push({ path: '/user', query: { idx: idx } });
    },
    goToAboutUs() {
      this.$router.push('/about');
    }
  }

};
</script>

<style scoped>
/* 样式可以根据需要自行调整 */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  /* 白色半透明背景 */
  backdrop-filter: blur(10px);
  /* 添加磨砂效果 */
  z-index: 1000;
  /* 确保导航栏在页面顶部 */
  transition: background-color 0.3s ease;
  /* 添加背景色过渡效果 */
  display: flex;
  align-items: center;
  color: #666;
}

.navbar--scrolled {
  background-color: rgba(255, 255, 255, 1);
  /* 页面滚动时背景色变为不透明 */
}

.page-content {
  padding-top: 60px;
  /* 确保页面内容不被导航栏遮挡 */
}

.navbar img {
  width: 40px;
  height: 40px;
  padding-left: 20px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  margin-left: auto;
}

.nav-links li {
  margin-right: 20px;
}

.user-actions button {
  margin-left: 20px;
  background-color: #a5a2a2;
  color: #000;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
}

.banner {
  background-image: url('../assets/x3.jpeg');
  background-size: cover;
  text-align: center;
  padding: 100px 20px;
  color: #fff;
}

.centered-text {
  text-align: center;
  font-size: 36px;
  opacity: 0;
  /* 默认隐藏 */
  transform: translateY(100%);
  /* 文字初始位置在下方 */
  transition: opacity 0.3s ease, transform 0.5s ease;
  /* 添加过渡效果 */
}

.pushed-out {
  /* transform: translateX(-50px);  */
  opacity: 1;
  /* 文字可见时显示 */
  transform: translateY(0);
  /* 将文字推出到屏幕中间 */
}

.products {
  padding: 50px 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.product-card img {
  width: 100%;
  border-radius: 5px;
}

.price {
  font-weight: bold;
  margin-top: 10px;
}

.footer {
  background-color: #f4f4f4;
  padding: 20px;
  color: #666;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  list-style-type: none;
  display: flex;
}

.footer-links li {
  margin-right: 20px;
}

.social-links a {
  color: #666;
  margin-left: 10px;
}

.social-links a:hover {
  color: #000;
}

.footer .copyright {
  margin-top: 20px;
}

.navbar a {
  color: #666;
  /* 修改链接文字颜色为灰色 */
}

.footer a {
  color: #666;
  /* 修改链接文字颜色为灰色 */
}

.swiper-slide img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* 轮播指示器颜色 */
.swiper-pagination-custom {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination-custom .swiper-pagination-bullet {
  width: 60px;
  height: 4px;
  border-radius: 2px;
  /* 圆角 */
  margin: 0 5px;
  /* 间距 */
  background-color: #a3d854;
  /* 指示器背景色 */
  cursor: pointer;
}

.swiper-pagination-custom .swiper-pagination-bullet-active {
  background-color: #a3d854;
  /* 当前指示器背景色 */
}</style>
