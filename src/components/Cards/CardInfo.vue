<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
            {{ cardSubtitle }}
          </h5>
          <span class="font-semibold text-xl text-blueGray-700">
            {{ cardTitle }}
          </span>
          <button class="w-full mt-4 block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-play-circle"></i>  Run
          </button>

          <button class="w-full mt-4 block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-edit"></i>  Configure
          </button>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
        <span class="whitespace-nowrap">{{ cardDescripiron }}</span>
      </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-info",
  props: {
    cardSubtitle: {
      type: String,
      default: "SPEC route",
    },
    cardTitle: {
      type: String,
      default: "SPECIFICATION",
    },
    cardDescripiron: {
      type: String,
      default: "info about the card",
    },
  },
};
</script>
