<template>
    <v-container>
        <p class="display-1 my-4">메인 페이지입니다</p>
        <v-divider></v-divider>

        <div>
            <v-text-field label="매개변수1" v-model="sParam1"></v-text-field>
            <v-text-field label="매개변수2" v-model="sParam2"></v-text-field>
        </div>

        <div class="text-center" v-on="fnGoSub">
            <v-btn @click="fnGoSub" class="mt-5" color="purple" dark>
                <v-icon>확 인</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>
<script>
    export default {

        data: function() {
            return {
                sParam1: '',
                sParam2: ''
            }
        },

        methods:{
            fnGoSub() {
                // $router: 인스턴스 하나만 존재 
                // router.push() ... 에 사용
                this.$router.push({
                    name: 'sub_page',
                    params: {
                        p_param1: this.sParam1,
                        p_param2: this.sParam2
                    }
                })
            }
        }
    }
</script>