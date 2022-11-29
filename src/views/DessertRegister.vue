<script>
import WebService from "@/services/web.service";
import DessertSignup from "@/components/DessertSignup.vue";
export default {
    components: { DessertSignup },

    data() {
        return {
            dessert: {
                _id: "",
                address: "",
                email: "",
                favorite: null,
                name: "",
                phone: "",
                password: "",
            },
            message: "",
        };
    },
    methods: {
        async dessertSignup(data) {
            try {
                await WebService.signup(data);
                this.message = "Đăng ký thành công";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<template>
    <div class="page">
        <h4>Đăng ký thành viên</h4>
        <DessertSignup :dessert="dessert" @submit:dessert="dessertSignup" />
        <p>{{ message }}</p>
    </div>
</template>

<style>
</style>