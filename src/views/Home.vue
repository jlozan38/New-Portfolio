<template>
    <div class="relative h-screen w-screen bg-cover bg-center shadow-2xl" 
    :style="`background-image:url(${bgImage})`">
    <div class="h-screen w-screen bg-red-800 opacity-75" />
    <div class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center">
      <h1 class="text-6xl font-bold text-white hover:bg-white hover:text-red-800 opacity-75" >
        Jesus Lozano
      </h1>
      <h3 class="text-3xl font-bold text-white px-4 hover:bg-white hover:text-red-800 opacity-75">
        Student
      </h3>
    </div>
  </div>
</template>

<script>
import bgImage from "../assets/bg.jpg"

export default {
  name: "Home",
  data() {
    return {
      bgImage
    }
  }
};
</script>
