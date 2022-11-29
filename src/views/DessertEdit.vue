<script>
import DessertForm from "@/components/DessertForm.vue";
import WebService from "@/services/web.service";
export default {
    components: { DessertForm },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            dessert: null,
            message: "",
        };
    },
    methods: {
        async getDessert(id) {
            try {
                this.dessert = await WebService.get(id);
            } catch (error) {
                console.log(error);
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1),
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
            console.log(this.dessert);
        },
        async updateDessert(data) {
            try {
                await WebService.update(this.dessert._id, data);
                this.message = "Thông tin món ăn được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteDessert() {
            if (confirm("Bạn muốn xóa món tráng miệng này?")) {
                try {
                    await WebService.delete(this.dessert._id);
                    this.$route.push({ name: "websitedessert" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getDessert(this.id);
        this.message = "";
    },
};
</script>
<template>
    <div v-if="dessert" class="page">
        <h4 class="font-semibold text-xl tracking-tight">Chỉnh sửa thông tin món ăn</h4>
        <DessertForm :dessert="dessert" @submit:dessert="updateDessert" @delete:dessert="deleteDessert" />
        <p>{{ message }}</p>
    </div>
</template>

<style>

</style>