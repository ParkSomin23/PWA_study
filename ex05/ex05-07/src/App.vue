<template>
  <div id="app">
    <h1>안녕하세요</h1>
    <router-view/>
    <hr>
    <p>라우터 링크 사용: 
      <router-link to="/main">main</router-link> |
      <router-link to="/sub">sub</router-link>
    </p>
</div>
</template>