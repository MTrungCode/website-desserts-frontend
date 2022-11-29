<script>
import WebService from "@/services/web.service";
import DessertLoginForm from "@/components/dessertLoginForm.vue";

export default {
    components: { DessertLoginForm },

    data() {
        return {
            dessert: {                
                email: "",
                password: "",
            },
            message: "",
        };
    },
    methods: {
        async dessertLogin(data) {
            try {
                await WebService.login(data);
                this.message = "Đăng nhập thành công";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<template>
    <div class="page">
        <h4>Đăng nhập</h4>
        <DessertLoginForm :dessert="dessert" @submit:dessert="dessertLogin()" />
        <p>{{ message }}</p>
    </div>
</template>

<style>
</style>