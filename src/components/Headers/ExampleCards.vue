<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info
              cardSubtitle="SPEC route"
              cardTitle="SPECIFICATION"
              cardDescripiron="Specifications"
            />
          </div>
                  
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info
              cardSubtitle="HELP route"
              cardTitle="HELP OPTIONS"
              cardDescripiron="Shows all possible options"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info
              cardSubtitle="VERSION route"
              cardTitle="VERSION"
              cardDescripiron="Version check"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info
              cardSubtitle="POINT route"
              cardTitle="POINT"
              cardDescripiron="Point example"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pt-8 content-center">
            <card-info
              cardSubtitle="ROTHC route"
              cardTitle="ROTHC"
              cardDescripiron="RothC example"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfo from "@/components/Cards/CardInfo.vue";

export default {
  components: {
    CardInfo,
  },
};
</script>
