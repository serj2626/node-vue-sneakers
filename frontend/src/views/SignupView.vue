<script setup></script>


<template>
    <h1 class="text-center">Регистрация</h1>
    <div class="flex justify-center items-center">
        <form class="flex flex-col gap-4 w-1/3">
            <input class="block" type="text" placeholder="имя пользователя">
            <input class="block" type="email" placeholder="почта">
            <input class="block" type="text" placeholder="пароль">
            <button class="bg-indigo-500 hover:bg-indigo-700 text-white
             font-bold py-2 px-4 rounded">
                Зарегистрироваться
            </button>
        </form>
    </div>
</template>