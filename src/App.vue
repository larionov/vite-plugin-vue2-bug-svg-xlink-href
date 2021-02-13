<template>
  <div>
    test svg

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <path
          d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z"
          id="my-svg1"
        />
      </defs>
      <!-- this is working -->
      <use :xlink:href="`#my-svg1`" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <path
          d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z"
          id="my-svg2"
        />
      </defs>
      <!-- this is not working, gives an error -->
      <use xlink:href="#my-svg2" />
    </svg>
  </div>
</template>

<script></script>
<style>
svg {
  fill: currentColor;
  height: 1.5rem;
  width: 1.5rem;
}
</style>
