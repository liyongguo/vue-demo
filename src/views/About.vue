<template>
  <div class="about">
    <h1>This is an about page: {{$route.params.id}}</h1>
    <br>
    <h1>通过开启 props 获取： {{id}}</h1>
  </div>
</template>
<script>

export default {
  name: 'About',
  props: ['id']
}
</script>
