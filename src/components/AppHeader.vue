<template>
    <div class="flex item-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex item-center flex-shrink-0 text-gray-800 mr-16">
                <a href="/" class="font-semibold text-xl tracking-tight">Dessert Recipe</a>
            </div>
            <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div class="text-md font-bold text-blue-700 lg:flex-grow">
                    <router-link :to="{ name: 'websitedessert' }"
                        class="block mt-4 lg:inline-block hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        Welcom to Dessert Recipe
                    </router-link>
                </div>
                <div class="flex">
                    <router-link :to="{ name: 'dessert.signup' }"
                        class="block bg-blue-300 text-md px-4 ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-6">
                        Đăng ký
                    </router-link>
                </div>
                <div class="flex">
                    <router-link :to="{ name: 'dessert.login' }"
                        class="block bg-blue-300 text-md px-4 ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-6">
                        Đăng nhập
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>