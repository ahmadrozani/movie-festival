<script setup lang="ts">
import CardMovie from "../../components/CardMovieList.vue";
let movies = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    url: "#",
    imgSrc: "https://picsum.photos/200/300",
    description: "Actor: Actor 1, Actor 2, Actor 3",
  },
  {
    id: 2,
    title: "Marvel Studios' Ant-Man and The Wasp: Quantumania",
    url: "#",
    imgSrc: "https://picsum.photos/200/300",
    description: "Actor: Actor 1, Actor 2, Actor 3",
  },
  {
    id: 3,
    title: "Guardian of The Galaxy Vol.3",
    url: "#",
    imgSrc: "https://picsum.photos/200/300",
    description: "Actor: Actor 1, Actor 2, Actor 3",
  },
  {
    id: 4,
    title: "Doctor Strange in the Multiverse of Madness",
    url: "#",
    imgSrc: "https://picsum.photos/200/300",
    description: "Actor: Actor 1, Actor 2, Actor 3",
  },
];
</script>

<template>
  <div id="home" class="w-full flex flex-col bg-white">
    <nav
      class="relative w-full flex flex-wrap items-center justify-between bg-green-600 text-gray-200 shadow-lg navbar h-12"
    >
      <div
        class="container-fluid w-full flex flex-wrap items-center justify-end px-12"
      >
        <div class="flex items-center relative">
          <a class="dropdown-toggle flex items-center hidden-arrow">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
              class="rounded-full"
              style="height: 25px; width: 25px"
              alt=""
              loading="lazy"
            />
          </a>
          <a class="ml-4" href="/login" id="logout-btn" role="button">Logout</a>
        </div>
      </div>
    </nav>
    <div class="flex flex-col mt-40 mx-40">
      <h1 class="font-medium leading-normal text-gray-800 py-5">MOVIES</h1>
      <div id="card-movies" class="grid grid-cols-4 gap-8">
        <card-movie
          v-for="(movie, index) in movies"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>
