<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 10px 20px;
  }

  li {
    padding: 5px 15px 5px 0;
  }

  li a {
    text-decoration: none !important;
    color: black !important;
    font-weight: bold;
  }

  li a:hover {
    color: #404040 !important;
  }
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Bad Link',
        to: '/random-bad-url'
      }
    ]
  })
}
</script>
