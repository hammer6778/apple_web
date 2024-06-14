<template>
  <div class="about-us">
    <div class="navbar">
      <button class="back-b" @click="goBack"><img src="../assets/back.png" alt=""></button>
      <h1>About Us</h1>
    </div>

    <div class="content">
      <h2>Our Story</h2>
      <p>Welcome to our company! Here you can learn more about who we are and what we do.</p>

      <h2>Our Team</h2>
      <p>Our team is comprised of talented individuals who are passionate about [company focus]. Meet some of our team
        members below:</p>
      <ul>
        <li v-for="(member, index) in team" :key="index">
          <h3>{{ member.name }}</h3>
          <p>{{ member.position }}</p>
          <p>{{ member.bio }}</p>
        </li>
      </ul>

      <h2>Our Values</h2>
      <ul>
        <li v-for="(value, index) in values" :key="index">{{ value }}</li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      team: [
        { name: 'John Doe', position: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Jane Smith', position: 'CTO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        // Add more team members as needed
      ],
      values: [
        'Quality',
        'Innovation',
        'Integrity',
        // Add more values as needed
      ],
    };
  },
  methods: {
    goBack() {
      // this.$router.go(-1); // 返回上一页
      window.history.back();

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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.content h2 {
  margin-top: 20px;
}
</style>
  