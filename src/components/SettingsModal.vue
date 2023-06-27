<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
      <button class="closeModal" @click="$emit('close-modal')">X</button>
      <div class="header">
        <h1>Settings:</h1>
      </div>
      <span></span>
      <div class="innerOption">
        <h2>Focus Time:</h2>
        <div>
          <input
            type="number"
            min="0"
            max="1440"
            class="innerOptionChanger"
            id="focusTimeMinutes"
            :value="returnFocusTimeMinutes()"
          />
          :
          <input
            type="number"
            min="0"
            max="1440"
            class="innerOptionChanger"
            id="focusTimeSeconds"
            :value="returnFocusTimeSeconds()"
          />
        </div>
      </div>
      <div class="innerOption">
        <h2>Litle Break:</h2>
        <div>
          <input
            type="number"
            min="0"
            max="1440"
            class="innerOptionChanger"
            id="lilBreakMinutes"
            :value="returnLilBreakMinutes()"
          />
          :
          <input
            type="number"
            min="0"
            max="1440"
            class="innerOptionChanger"
            id="lilBreakSeconds"
            :value="returnLilBreakSeconds()"
          />
        </div>
      </div>
      <div class="innerOption">
        <h2>Big Break:</h2>
        <div>
          <input
            type="number"
            min="0"
            max="1440"
            class="innerOptionChanger"
            id="bigBreakMinutes"
            :value="returnBigBreakMinutes()"
          />
          :
          <input
            type="number"
            min="0"
            max="1440"
            class="innerOptionChanger"
            id="bigBreakSeconds"
            :value="returnBigBreakSeconds()"
          />
        </div>
      </div>
      <div class="innerOption">
        <h2>Sound Effect</h2>
        <div>
          <select v-model="audio.audio">
            <option>sound1</option>
            <option>sound2</option>
          </select>
          <input
              type="number"
              min="0"
              max="100"
              class="innerOptionMusicVolume"
              id="bigBreakMinutes"
              v-model="audio.volume"
            /> %
        </div>
        </div>
      <div class="innerOption">
        <h2>Want Music</h2>
        <input type="checkbox" :checked="wantMusic" @click="wantsMusic()"/>
      </div>
      <div class="innerOption" v-if="wantMusic">
        <h2>Provide a yt music:</h2>
        <input type="text" id="musicLink"/>
      </div>
      <button class="saveSettings" @click="saveOnLocalStorage()">Save!</button>
    </div>
    <div class="close">
      
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    const localStorageAudio = JSON.parse(localStorage.audio);
    return{
      audio:{
        audio: localStorageAudio.audio,
        volume: localStorageAudio.volume * 100,
      },
      wantMusic: JSON.parse(localStorage.wantsMusic),
    };
  },
  methods: {
    returnFocusTimeMinutes() {
      if (localStorage.focusTime < 60) {
        return 0;
      }

      return localStorage.focusTime / 60;
    },
    returnFocusTimeSeconds() {
      if (localStorage.focusTime < 60) {
        return localStorage.focusTime;
      }

      return localStorage.focusTime % 60;
    },
    returnLilBreak() {
      return localStorage.lilBreak;
    },
    returnLilBreakMinutes() {
      if (localStorage.lilBreak < 60) {
        return 0;
      }

      return localStorage.lilBreak / 60;
    },
    returnLilBreakSeconds() {
      if (localStorage.lilBreak < 60) {
        return localStorage.lilBreak;
      }

      return localStorage.lilBreak % 60;
    },
    returnBigBreakMinutes() {
      if (localStorage.bigBreak < 60) {
        return 0;
      }

      return localStorage.bigBreak / 60;
    },
    returnBigBreakSeconds() {
      if (localStorage.bigBreak < 60) {
        return localStorage.bigBreak;
      }

      return localStorage.bigBreak % 60;
    },
    returnBigBreak() {
      return localStorage.bigBreak;
    },
    returnWantsMusic() {
      return localStorage.wantsMusic;
    },
    wantsMusic(){
      this.wantMusic = !this.wantMusic;
    },
    saveOnLocalStorage() {
      /* if(parseInt(document.getElementById("focusTimeMinutes").value) === 0){
console.log("asd")
      } */

      const focusTimeSeconds = parseInt(document.getElementById("focusTimeMinutes").value * 60) + parseInt(document.getElementById("focusTimeSeconds").value);
      const lilBreakSeconds = parseInt(document.getElementById("lilBreakMinutes").value * 60) + parseInt(document.getElementById("lilBreakSeconds").value);
      const bigBreakSeconds = parseInt(document.getElementById("bigBreakMinutes").value * 60) + parseInt(document.getElementById("bigBreakSeconds").value);
      const audio2LocalStorage = {
        audio: this.audio.audio,
        volume: this.audio.volume / 100,
      }

      //console.log(document.getElementById("musicLink").value);
      console.log(this.audio);
      
      //save in localStorage
      localStorage.focusTime = focusTimeSeconds;
      localStorage.lilBreak = lilBreakSeconds;
      localStorage.bigBreak = bigBreakSeconds;
      localStorage.audio = JSON.stringify(audio2LocalStorage);
      localStorage.wantsMusic = this.wantMusic;
    },
  },
};
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
  padding: 30px 0;
  border-radius: 20px;
}

.closeModal{
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
}

h1{
  padding-bottom: 30px;;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
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

.saveSettings {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

.innerOptionMusicVolume{
  border: 0px;
  width: 40px;
}
</style>
