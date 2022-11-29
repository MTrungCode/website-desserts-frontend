<script>
import DessertForm from "@/components/DessertForm.vue";
import WebService from "@/services/web.service";
export default {
    components: { DessertForm },

    data() {
        return {
            dessert: {
                _id: "",
                name: "",
                description: "",
                favorite: null,
                thumbar: "",
                ingredients: "",
                method: "",
            },
            message: "",
        };
    },
    methods: {
        async dessertAdd(data) {
            try {
                await WebService.create(data);
                this.message = "Thêm món ăn thành công";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<template>
    <div class="page">
        <h4>Thêm món tráng miệng mới</h4>
        <DessertForm :dessert="dessert" @submit:dessert="dessertAdd" />
        <p>{{ message }}</p>
    </div>
</template>

<style>
</style>