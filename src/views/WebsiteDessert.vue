<template>
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="container px-32 mb-6">
            <InputSearch v-model="searchText" />
        </div>
        <DessertList v-if="filteredDessertsCount > 0" :desserts="filteredDesserts"
            v-model:activeIndex="activeIndex" />
        <p v-else>Không có món tráng miệng nào.</p>
        <div class="text-center my-4">
            <button class="btn btn-sm btn-primary px-4 py-2 text-center text-white border rounded shadow-sm"
                @click="refreshList()">
                <i class="fas fa-redo"></i> Làm mới
            </button>                    
            <button class="btn btn-sm btn-success px-4 py-2 text-center text-white border rounded shadow-sm"
                 @click="goToAddDessert">
                <i class="fas fa-plus"></i> Thêm mới
            </button>
        </div>
        <div class="container px-8 mb-4">
            <div v-if="activeDessert">
                <div class="grid md:grid-cols-6 grid-cols-1">
                    <div class="md-col-start-2 md:col-span-4 shadow-lg">
                        <div class="grid md:grid-cols-2 grid-cols-1">
                            <DessertCard :dessert="activeDessert" />
                            <div class="p-4">
                                <router-link :to="{
                                    name: 'dessert.edit',
                                    params: { id: activeDessert._id },
                                }">
                                    <span class="mt-2 badge bg-warning text-dark">
                                        <i class="fas fa-edit"></i> Hiệu chỉnh
                                    </span>
                                </router-link>                                
                            </div>
                        </div>
                    </div>
                </div>
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
