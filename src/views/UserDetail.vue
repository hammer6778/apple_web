<!-- UserDetails.vue -->
<template>
    <div class="navbar">
        <button class="back-b" @click="goBack"><img src="../assets/back.png" alt=""></button>
        <h1>User Details</h1>
    </div>
    <div class="content">
        <!-- <p>User ID: {{ idx }}</p> -->
        <!-- <p>User ID: {{ img }}</p> -->
        <div class="heartbeat" @click="handleClick" ref="heartbeatRef">
            <img :src="idx" />
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

import { useRouter } from 'vue-router';
export default {
  name: 'UserDetails',
  setup() {
    const idx = ref('');
    const img = ref('');
    const heartbeatRef = ref(null);

    const router = useRouter();
    const goBack = () => {
        router.go(-1); // 返回上一页
    };

   const handleClick = () => {
    console.log('Heartbeat ref:', heartbeatRef.value);
    if (heartbeatRef.value) {
        heartbeatRef.value.classList.add('clicked'); // 添加clicked类来触发水波荡漾效果
    }
};

    return { idx, img, goBack, handleClick };
  },
  computed: {
    idx() {
      return this.$route.query.idx;
    },
    img() {
      return require(`../assets/x${this.$route.query.idx}.jpeg`);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #f4f4f4;
  padding: 10px 20px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.back-b {
  margin-right: 40px;
  border: none;
  width: 40px;
  height: 40px;
}

.back-b img {
  width: 40px;
  height: 40px;
}

.content {
  margin-top: 200px;
}

/* 心跳动画 */
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

/* 使用动画 */
.heartbeat img {
  animation: heartbeat 1s infinite;
  /* 应用心跳动画，持续时间为1秒，无限循环 */
}

.heartbeat::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  /* 初始时隐藏水波荡漾效果 */
  transition: transform 0.5s ease;
  /* 添加水波荡漾动画 */
  pointer-events: none;
  /* 禁止水波荡漾元素响应鼠标事件 */
}

/* 点击时显示水波荡漾效果 */
.heartbeat.clicked::after {
  transform: translate(-50%, -50%) scale(2);
  /* 缩放到2倍 */
}
</style>
