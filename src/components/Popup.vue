<template>
  <div class="popup">
    <div class="popup-inner">
        <slot />
        <button class="popup-close"> Close Popup</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(30, 30, 30, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner{
    background: #fff;
    padding: 32px;
}
</style>