<template>
  <ol-map class="the-map">
    <ol-view :enableRotation="false" :center="center" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
      <ol-source-xyz url="https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attributions='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>' />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :projection="projection">
        <ol-feature>
          <ol-geom-point :coordinates="center"></ol-geom-point>
          <ol-style>
            <ol-style-icon src="/icons/logo.svg" :anchor="[0.5, 0.5]" :size="[80, 58]"></ol-style-icon>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
    <ol-interaction-mouse-wheel-zoom :condition="shiftKeyOnly" />
  </ol-map>
</template>

<script setup>
import { fromLonLat } from "ol/proj";
import { shiftKeyOnly } from "ol/events/condition";

const projection = ref("EPSG:3857");
const zoom = ref(15);
const center = ref(fromLonLat([84.978389, 56.454001]));
</script>

<style lang="less">
.the-map {
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: grab;
  filter: grayscale(100%);

  &:active {
    cursor: grabbing;
  }

  .ol-zoom {
    top: auto;
    left: auto;
    right: 20px;
    bottom: 30px;
  }

  .ol-control button {
    width: 30px;
    height: 30px;
    border: 1px solid @red;
    background-color: @red;
    color: @white;
    cursor: pointer;
    outline: none;

    &:hover {
      outline: none;
    }
  }
}
</style>
