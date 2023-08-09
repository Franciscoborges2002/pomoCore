<template>
  <div class="modalOverlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
      <button class="closeModal" @click="$emit('close-modal')">Close</button>
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
        <h2>Little Break Intervals:</h2>
        <input
            type="number"
            min="0"
            class="innerOptionChanger"
            id="lilBreakIntervals"
            :value="returnLilBreakInterval()"
          />
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
        <div class="soundEffectOptions">
          <select v-model="audio.audio">
            <option>sound1</option>
            <option>sound2</option>
          </select>
          <div>
            <input
              type="number"
              min="0"
              max="100"
              class="innerOptionMusicVolume"
              id="bigBreakMinutes"
              v-model="audio.volume"
            />
            %
          </div>
        </div>
      </div>
      <!-- <div class="innerOption">
        <h2>Want Music</h2>
        <input type="checkbox" :checked="wantMusic" @click="wantsMusic()"/>
      </div>
      <div class="innerOption" v-if="wantMusic">
        <h2>Provide a yt music:</h2>
        <input type="text" id="musicLink"/>
      </div> -->

      <div class="dangerStuff">
        <p class="dangerText" @click="deleteEverything()">Delete Everything</p>
      </div>
      <button class="saveSettings" @click="saveOnLocalStorage()">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    const localStorageAudio = JSON.parse(localStorage.audio);
    return {
      audio: {
        audio: localStorageAudio.audio,
        volume: localStorageAudio.volume * 100,
      }/* ,
      wantMusic: JSON.parse(localStorage.wantsMusic), */
    };
  },
  methods: {
    returnFocusTimeMinutes() {
      if (localStorage.focusTime < 60) {
        return "00";
      }

      if((localStorage.focusTime / 60) < 10){
        return "0" + (localStorage.focusTime / 60);
      }

      return Math.floor(localStorage.focusTime / 60);
    },
    returnFocusTimeSeconds() {
      let checkTime = localStorage.focusTime % 60;//get the seconds that are left
      
      if (checkTime < 60) {
        if(checkTime < 10){
          return "0" + checkTime;
        }
        return checkTime;
      }

      return checkTime % 60;
    },
    returnLilBreak() {
      return localStorage.lilBreak;
    },
    returnLilBreakMinutes() {
      if (localStorage.lilBreak < 60) {
        return "00";
      }

      if((localStorage.lilBreak / 60) < 10){
        return "0" + (localStorage.lilBreak / 60);
      }

      return Math.floor(localStorage.lilBreak / 60);
    },
    returnLilBreakSeconds() {
      let checkTime = localStorage.lilBreak % 60;//get the seconds that are left
      
      if (checkTime < 60) {
        if(checkTime < 10){
          return "0" + checkTime;
        }
        return checkTime;
      }

      return checkTime % 60;
    },
    returnBigBreakMinutes() {
      if (localStorage.bigBreak < 60) {
        return "00";
      }

      if((localStorage.bigBreak / 60) < 10){
        return "0" + (localStorage.bigBreak / 60);
      }

      return Math.floor(localStorage.bigBreak / 60);
    },
    returnBigBreakSeconds() {
      let checkTime = localStorage.bigBreak % 60;//get the seconds that are left
      
      if (checkTime < 60) {
        if(checkTime < 10){
          return "0" + checkTime;
        }
        return checkTime;
      }

      return checkTime % 60;
    },
    returnBigBreak() {
      return localStorage.bigBreak;
    },
    returnLilBreakInterval(){
      return localStorage.maxLilBreaks;
    },
    /*returnWantsMusic() {
      return localStorage.wantsMusic;
    },
     wantsMusic() {
      this.wantMusic = !this.wantMusic;
    }, */
    deleteEverything(){
      if (window.confirm("Do you want to really delete everything?")) {
        localStorage.clear();
        location.reload();
      }
    },
    saveOnLocalStorage() {
      const focusTimeSeconds =
        parseInt(document.getElementById("focusTimeMinutes").value * 60) +
        parseInt(document.getElementById("focusTimeSeconds").value);
      const lilBreakSeconds =
        parseInt(document.getElementById("lilBreakMinutes").value * 60) +
        parseInt(document.getElementById("lilBreakSeconds").value);
      const bigBreakSeconds =
        parseInt(document.getElementById("bigBreakMinutes").value * 60) +
        parseInt(document.getElementById("bigBreakSeconds").value);
      const audio2LocalStorage = {
        audio: this.audio.audio,
        volume: this.audio.volume / 100,
      };
      const lilBreakIntervals = parseInt(document.getElementById("lilBreakIntervals").value);

      //save in localStorage
      localStorage.focusTime = focusTimeSeconds;
      localStorage.lilBreak = lilBreakSeconds;
      localStorage.bigBreak = bigBreakSeconds;
      localStorage.audio = JSON.stringify(audio2LocalStorage);
      localStorage.maxLilBreaks = lilBreakIntervals;

      //force to reload the page to apply new settings
      location.reload();
    },
  },
};
</script>

<style scoped>
.modalOverlay {
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
  height: 410px;
  width: 500px;
  margin-top: 10%;
  padding: 30px 0;
  border-radius: 20px;
}

.closeModal {
  margin-left: 10px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.header{
  padding-bottom: 30px;
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
  background-color: #727272;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 28px;
}

.innerOption{
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-right: 24px;
  margin-left: 24px;
}

.innerOptionMusicVolume {
  border: 0px;
  width: 40px;
}

.soundEffectOptions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.dangerText{
  color:#ac003e;
  text-decoration: underline;
  margin: 0px;
}
</style>
