<script>
export default {
    props: {
        dessert: { type: Object, required: true },
    },
};
</script>
<template>
    <div class="blog p-6 rounded-lg bg-white max-w-sm mt-4">
        <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="w-full p-1 md:m-2">
                <img :src="dessert.thumbar">
            </div>
        </div>
    </div>
    <div class="p-4">
        <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="w-full p-1 md:m-2">
                <strong>Tên món tráng miệng: </strong>
                {{ dessert.name }}
            </div>
            <div class="w-full p-1 md:m-2">
                <strong>Mô tả: </strong>
                {{ dessert.description }}
            </div>
            <div class="w-full p-1 md:m-2">
                <strong>Thành phần: </strong>
                <span v-for="text in dessert.ingredients.split(';')" style="white-space: nowrap;"><br>- {{ text }}.</span>            
            </div>
            <div class="w-full p-1 md:m-2">
                <strong>Cách làm: </strong>
                <span v-for="text in dessert.method.split(';')" style="white-space: pre-line;"><br>- {{ text }}</span>
            </div>    
            <div class="w-full p-1 md:m-2">
                <strong>Yêu thích:&nbsp;</strong>
                <i v-if="dessert.favorite" class="fas fa-check"></i>
                <i v-else class="fas fa-times"></i>
            </div>
        </div>
    </div>
</template>