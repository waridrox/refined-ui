<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12 w-full h-screen">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              cardSubtitle="SPEC route"
              cardTitle="SPECIFICATION"
              cardDescripiron="Specifications"
              cardFunctionRun="Run"
              cardMethodName="spec"
              cardAlertConfirmation="Specifications route ran successfully"
            />
          </div>
                  
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              cardSubtitle="HELP route"
              cardTitle="HELP"
              cardDescripiron="Show all possible options"
              cardFunctionRun="Run"
              cardMethodName="help"
              cardAlertConfirmation="Help options route ran successfully"

            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              cardSubtitle="VERSION route"
              cardTitle="VERSION"
              cardDescripiron="Version check"
              cardFunctionRun="Run"
              cardMethodName="version"
              cardAlertConfirmation="Version route ran successfully"

            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              cardSubtitle="POINT route"
              cardTitle="POINT"
              cardDescripiron="Point example"
              cardFunctionRun="Run"
              cardMethodName="point"
              cardAlertConfirmation="Point route ran successfully"

            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pt-8 content-center">
            <card-info-run
              cardSubtitle="ROTHC route"
              cardTitle="ROTHC"
              cardDescripiron="RothC example"
              cardFunctionRun="Run"
              cardMethodName="rothc"
              cardAlertConfirmation="RothC route ran successfully"

            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfoRun from "@/components/Cards/CardInfoRun.vue";

export default {
  components: {
    CardInfoRun,
  },
};
</script>
