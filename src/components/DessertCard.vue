<script>
export default {
    props: {
        dessert: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="col-md-6">
            <div class="p-1">
                <img :src="dessert.thumbar">
            </div>
        </div>
        <div class="col-md-10">
            <div class="p-1">
                <strong>Tên món tráng miệng: </strong>
                {{ dessert.name }}
            </div>
            <div class="p-1">
                <strong>Mô tả: </strong>
                {{ dessert.description }}
            </div>
            <div class="p-1">
                <strong>Thành phần: </strong>
                <span v-for="text in dessert.ingredients.split(';')" style="white-space: nowrap;"><br>- {{ text }}.</span>            
            </div>
            <div class="p-1">
                <strong>Cách làm: </strong>
                <span v-for="text in dessert.method.split(';')" style="white-space: pre-line;"><br>- {{ text }}</span>
            </div>    
            <div class="p-1">
                <strong>Yêu thích:&nbsp;</strong>
                <i v-if="dessert.favorite" class="fas fa-check"></i>
                <i v-else class="fas fa-times"></i>
            </div>
        </div>
    </div>
</template>