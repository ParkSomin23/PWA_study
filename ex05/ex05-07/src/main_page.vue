<template lang="html">
    <div>
        <h2>메인 페이지입니다</h2>
        <!--v-on:click 대신 @click으로 사용 (간략화 version)-->
        <button @click="fnSubPage">서브 페이지로 이동(라우터 함수 사용)</button>
    </div>
</template>

<script>
export default {
    methods: {
        fnSubPage() {
            //$: vue 객체에 정의된 router 변수값 접근 가능
            this.$router.push('/sub') 
        }
    }
}
</script>