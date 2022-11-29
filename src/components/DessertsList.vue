<script>
export default {
    props: {
        desserts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap md:w-1/4 w-1/2" v-for="(dessert, index) in desserts" :key="dessert._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            <div class="w-full p-1 md:m-2">
                <img class="block object-cover object-center w-full h-full rounded-lg" :src="dessert.thumbar" >
            </div>
        </div>
    </div>
</template>