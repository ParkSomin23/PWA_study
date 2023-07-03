<template>
    <v-container>
        <p class="display-1 my-4">서브 페이지입니다</p>
        <v-divider></v-divider>

        <p class="display-4 my-4">{{ sTitle1 }}</p>
        <p class="display-4 my-4">{{ sTitle2 }}</p>
        <div class="text-center">
            <v-btn fab large class="mt-5" color="purple" dark to="/main">
                <v-icon>mdi-replay</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                // $route : 라우팅 발생마다 생성되는 객체
                sTitle1: this.$route.params.p_param1,
                sTitle2: this.$route.params.p_param2
            }
        }
    }
</script>