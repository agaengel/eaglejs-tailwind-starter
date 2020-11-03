<template>
  <div class="flex flex-col relative min-h-screen">
    <div class="justify-center flex flex-1 flex-col">
      <slide>
        <div class="grid grid-flow-col grid-cols-3 bg-gray-200 h-full">
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            First slide
          </div>
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            three colums
          </div>
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            no animation
          </div>
        </div>
      </slide>

      <slide
        steps="2"
        enter-prev="animate__bounceInLeft"
        enter-next="animate__bounceInRight"
      >
        <div
          v-if="step == 1"
          class="grid grid-flow-col grid-rows-3 gap-4 bg-gray-200 h-full"
        >
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            Second Slide
          </div>
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            three rows
          </div>
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            first step (klick for next step)
          </div>
        </div>
        <eg-transition enter="animate__flip">
          <div
            v-if="step == 2"
            class="grid grid-flow-col grid-rows-3 gap-4 h-full"
          >
            <div
              class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
            >
              Second Slide (with animation)
            </div>
            <div
              class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
            >
              three rows
            </div>
            <div
              class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
            >
              second step
            </div>
          </div>
        </eg-transition>
      </slide>

      <slide steps="2">
        <div class="grid justify-items-auto gap-4 grid-cols-2 h-full">
          <div
            class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2"
          >
            <p class="block">Third Slide</p>
          </div>
          <div
            class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2"
          >
            six rows
          </div>
          <div
            class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2"
          >
            with
          </div>
          <div
            class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2"
          >
            2 Steps
          </div>
          <div
            class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2"
          >
            ḱlick for next
          </div>
          <eg-transition enter="animate__flip" enter-prev="animate__flip">
            <div
              v-if="step >= 2"
              class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2"
            >
              Animated step
            </div>
          </eg-transition>
        </div>
      </slide>
      <slide>
        <div class="grid grid-flow-col grid-rows-3 gap-4 bg-gray-200 h-full">
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            Forth Slide with Presenter notes press P to show
          </div>
          <div v-if="parentWindow">
            <div
              class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
            >
              These notes are only visible for the presenter !!!
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="grid grid-flow-col grid-rows-3 gap-4 bg-gray-200 h-full">
          <div
            class="text-gray-700 flex justify-center items-center bg-gray-400 px-4 py-2 m-2"
          >
            Fifth Slide with Codeblock
          </div>
          <div
            class="text-gray-700 inline-flex justify-center items-center bg-gray-400 h-max-content text-base md:text-xl lg:text-2xl"
          >
            <!-- prettier-ignore -->
            <eg-code-block lang="js">const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, host, () => {
  console.log('Web server running at http://%s:%s',host,port );
});</eg-code-block>
          </div>
        </div>
      </slide>
      <slide>
        <h1 class="text-center p-2">Plain Slide with list and svg</h1>
        <div
          class="items-center flex justify-center rounded-md pt-4 p-2 m-2 bg-blue-600 self-center mx-auto w-16 md:w-22 h-16 md:h-22"
        >
          <svg
            class="fill-current text-white inline-block h-8 w-8 md:h-16 md:w-16"
            role="img"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/icons.svg#icon-rocket"
            />
          </svg>
        </div>
        <ul class="list-disc list-outside m-2 ml-6">
          <li>item1</li>
          <li>item2</li>
          <ul class="list-decimal list-inside">
            <li>sub item 1</li>
            <li>sub item 2</li>
          </ul>
        </ul>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";

export default {
  mixins: [Slideshow],
  props: {
    onEndExit: {
      default: () =>
        function () {
          return true;
        },
      type: Function,
    },
    onStartExit: {
      default: () =>
        function () {
          return true;
        },
      type: Function,
    },
  },
  data: function () {
    return {
      childWindow: null,
      parentWindow: null,
    };
  },
  mounted: function () {
    document.currentSlide = {};
  },
  methods: {
    click: function (evt) {
      evt.stopPropagation();
    },
  },
};
</script>
