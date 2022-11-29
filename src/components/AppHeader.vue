<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a href="/" class="navbar-brand">Dessert Recipe</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'websitedessert' }" class="nav-link">
                    Welcom to Dessert Recipe
                </router-link>
            </li>
        </div>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'dessert.signup' }" class="nav-link">
                    Đăng ký
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'dessert.login' }" class="nav-link">
                    Đăng nhập
                </router-link>
            </li>
        </div>
    </nav>
</template>