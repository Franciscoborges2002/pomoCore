<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
          <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
          <h2>Settings:</h2>
          <span></span>
          <div class="innerOption">
            <h2>Focus Time:</h2>
            <input type="number" min="0" max="1440" class="innerOptionChanger" id="focusTime" :value="returnFocusTime()" />
          </div>
          <div class="innerOption">
            <h2>Litle Break:</h2>
            <input type="number" min="0" max="1440" class="innerOptionChanger" id="lilBreak" :value="returnLilBreak()" />
          </div>
          <div class="innerOption">
            <h2>Big Break:</h2>
            <input type="number" min="0" max="1440" class="innerOptionChanger" id="bigBreak" :value="returnBigBreak()" />
          </div>
          <div class="innerOption">
            <h2>Want Music</h2>
            <input type="checkbox" :value="returnBigBreak()" />
          </div>
          <button class="closeSettings" @click="$emit('close-modal')">Save!</button>
        </div>
        <div class="close" >
            <button @click="$emit('close-modal')">X</button>
          <!-- <img class="close-img" src="~/assets/close-icon.svg" alt="" /> -->
        </div>
      </div>
</template>

<script>
export default {
    beforeCreate(){
        document.getElementsByClassName("bigBreak").value = "16"
    },
    methods:{
        returnFocusTime(){
            return localStorage.focusTime;
        },
        returnLilBreak(){
            return localStorage.lilBreak;
        },
        returnBigBreak(){
            return localStorage.bigBreak;
        },
        returnWantsMusic(){
            return localStorage.wantsMusic;
        },
        saveOnLocalStorage(){
            /* console.log(document.getElementById("focusTime").value)
            console.log(document.getElementById("lilBreak").value)
            console.log(document.getElementById("bigBreak").value) */
            localStorage.focusTime = document.getElementById("focusTime").value;
            localStorage.lilBreak = document.getElementById("lilBreak").value;
            localStorage.bigBreak = document.getElementById("bigBreak").value;
            console.log("Settings were saved!");
        }
    }
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  
  .close-img {
    width: 25px;
  }
  
  .check {
    width: 150px;
  }
  
  h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
  }
  
  p {
    font-size: 16px;
    margin: 20px 0;
  }
  
  button {
    background-color: #ac003e;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
    border-radius: 16px;
    margin-top: 50px;
  }
</style>