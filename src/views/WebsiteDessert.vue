<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Dessert Recipe
            </h4>
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <DessertList v-if="filteredDessertsCount > 0" :desserts="filteredDesserts"
                    v-model:activeIndex="activeIndex" />
                <p v-else>Không có món tráng miệng nào.</p>
            </div>
            <div class="text-center my-4">
                <div class="bg-green-700 px-4 py-2 text-center text-white border rounded shadow-sm">
                    <button class="btn btn-sm btn-primary" @click="refreshList()">
                        <i class="fas fa-redo"></i> Làm mới
                    </button>
                    <hr>
                    <button class="btn btn-sm btn-success" @click="goToAddDessert">
                        <i class="fas fa-plus"></i> Thêm mới
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeDessert">
                <h4>
                    Chi tiết món tráng miệng
                    <i class="fas fa-address-card"></i>
                </h4>
                <DessertCard :dessert="activeDessert" />
                <router-link :to="{
                    name: 'dessert.edit',
                    params: { id: activeDessert._id },
                }">
                    <span class="mt-2 badge bg-warning text-dark">
                        <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                </router-link>
            </div>
        </div> 
    </div>
</template>
<script>
import DessertCard from "@/components/DessertCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import DessertList from "@/components/DessertsList.vue";
import WebService from "@/services/web.service";
export default {
    components: {
        DessertCard,
        InputSearch,
        DessertList,
    },
    data() {
        return {
            desserts: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        dessertStrings() {
            return this.desserts.map((dessert) => {
                const { name, description, ingredients, method, thumbar } = dessert;
                return [name, description, ingredients, method, thumbar].join("");
            });
        },
        filteredDesserts() {
            if (!this.searchText) return this.desserts;
            return this.desserts.filter((_dessert, index) =>
                this.dessertStrings[index].includes(this.searchText)

            );
        },
        activeDessert() {
            if (this.activeIndex < 0) return null;
            return this.filteredDesserts[this.activeIndex];
        },
        filteredDessertsCount() {
            return this.filteredDesserts.length;
        },
    },
    methods: {
        async retrieveDesserts() {
            try {
                this.desserts = await WebService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveDesserts();
            this.activeIndex = -1;
        },
        goToAddDessert() {
            this.$router.push({ name: "dessert.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
.page {
    text-align: left;
    max-width: 850px;
}
</style>
