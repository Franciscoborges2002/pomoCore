(function(){var e={507:function(e,t,a){"use strict";var n=a(130),o=a(768);const s={id:"app"};function i(e,t,a,n,i,l){const r=(0,o.g2)("Home");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(r)])}var l=a(232);const r=e=>((0,o.Qi)("data-v-462e030e"),e=e(),(0,o.jt)(),e),c={class:"container"},u=r((()=>(0,o.Lk)("div",{id:"header"},[(0,o.Lk)("h1",null,[(0,o.Lk)("a",{href:"https://en.wikipedia.org/wiki/Pomodoro_Technique",target:"_blank"},"pomo"),(0,o.eW)("Core ")])],-1))),d={class:"main"},k={class:"buttons corePart left"},m=r((()=>(0,o.Lk)("p",{class:"stateMain"},"normal",-1))),g=r((()=>(0,o.Lk)("p",{class:"stateSettings"},"normal",-1))),v={class:"timerContainer corePart center"},p={class:"timer"},h={class:"currentTask"},S={key:0},f={key:1},L={class:"tasks corePart right"},I=r((()=>(0,o.Lk)("div",{class:"tasksHeader"},[(0,o.Lk)("h2",null,"Tasks")],-1))),B={class:"tasksBody"},T={class:"taskList"},y=r((()=>(0,o.Lk)("span",null,"Breaks:",-1))),b=r((()=>(0,o.Lk)("button",null,"+",-1))),O=r((()=>(0,o.Lk)("footer",null,[(0,o.eW)(" Made with 💜 by "),(0,o.Lk)("a",{href:"https://github.com/Franciscoborges2002",target:"_blank"},"Francisco Borges"),(0,o.eW)(". ")],-1)));function C(e,t,a,s,i,r){const C=(0,o.g2)("SettingsModal"),w=(0,o.g2)("v-icon"),M=(0,o.g2)("task");return(0,o.uX)(),(0,o.CE)("div",c,[u,(0,o.Lk)("div",d,[(0,o.Lk)("div",k,[(0,o.bo)((0,o.bF)(C,{onCloseModal:t[0]||(t[0]=t=>e.showSettingsModal=!1)},null,512),[[n.aG,e.showSettingsModal]]),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.handleTimeButton&&r.handleTimeButton(...e))},[m,e.playButtonShow?((0,o.uX)(),(0,o.Wv)(w,{key:0,name:"fa-play",scale:"1.8",fill:"#858585"})):((0,o.uX)(),(0,o.Wv)(w,{key:1,name:"gi-pause-button",scale:"1.8",fill:"#858585"}))]),(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>r.handleSkipButton&&r.handleSkipButton(...e))},[(0,o.bF)(w,{name:"io-play-skip-forward",scale:"1.8",fill:"#858585"})]),(0,o.Lk)("button",{onClick:t[3]||(t[3]=t=>e.showSettingsModal=!0)},[g,(0,o.bF)(w,{name:"io-settings-sharp",scale:"1.8",fill:"#858585"})])]),(0,o.Lk)("div",v,[(0,o.Lk)("div",p,(0,l.v_)(r.timeDisplay),1),(0,o.Lk)("div",h,[(0,o.eW)(" working on:"),e.currentTask?((0,o.uX)(),(0,o.CE)("span",S,(0,l.v_)(e.currentTask.description),1)):((0,o.uX)(),(0,o.CE)("span",f,"something"))])]),(0,o.Lk)("div",L,[I,(0,o.Lk)("div",B,[(0,o.Lk)("div",T,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.tasks,(e=>((0,o.uX)(),(0,o.Wv)(M,{class:"individualTask",key:e.id,onRemove:r.removeTask,onChangeWorking:r.changeWorking,task:e},null,8,["onRemove","onChangeWorking","task"])))),128))]),(0,o.Lk)("form",{class:"tasksForm",onSubmit:t[6]||(t[6]=(0,n.D$)((t=>r.addTask(e.task)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{class:"taskName",type:"text",placeholder:"Task name","onUpdate:modelValue":t[4]||(t[4]=t=>e.task.description=t)},null,512),[[n.Jo,e.task.description]]),y,(0,o.bo)((0,o.Lk)("input",{class:"totalIntervals",type:"number",min:"1","onUpdate:modelValue":t[5]||(t[5]=t=>e.task.totalIntervals=t)},null,512),[[n.Jo,e.task.totalIntervals]]),b],32)])])]),O])}var w=a(144);const M=e=>((0,o.Qi)("data-v-0a5a1134"),e=e(),(0,o.jt)(),e),x={class:"taskContainer"},E={class:"taskContent"},N={key:0,class:"taskBody",style:{"text-decoration":"line-through"}},J={key:0,style:{"font-weight":"bold"}},W={key:1,style:{"font-weight":"normal"}},_={key:1,class:"taskBody",style:{"text-decoration":"normal"}},X={key:0,style:{"font-weight":"bold"}},D={key:1,style:{"font-weight":"normal"}},F={class:"taskActions"},j=M((()=>(0,o.Lk)("span",null,"⚙️",-1))),P=[j];function $(e,t,a,s,i,r){const c=(0,o.g2)("TaskSettingsModal");return(0,o.uX)(),(0,o.CE)("div",x,[(0,o.Lk)("div",E,[a.task.checked?((0,o.uX)(),(0,o.CE)("div",N,[a.task.working?((0,o.uX)(),(0,o.CE)("span",J,(0,l.v_)(a.task.description),1)):((0,o.uX)(),(0,o.CE)("span",W,(0,l.v_)(a.task.description),1)),(0,o.eW)(" ("+(0,l.v_)(a.task.intervalsMade)+" / "+(0,l.v_)(a.task.totalIntervals)+") ",1)])):((0,o.uX)(),(0,o.CE)("div",_,[a.task.working?((0,o.uX)(),(0,o.CE)("span",X,(0,l.v_)(a.task.description),1)):((0,o.uX)(),(0,o.CE)("span",D,(0,l.v_)(a.task.description),1)),(0,o.eW)(" ("+(0,l.v_)(a.task.intervalsMade)+" / "+(0,l.v_)(a.task.totalIntervals)+") ",1)]))]),(0,o.Lk)("div",F,[(0,o.Lk)("button",null,[a.task.working?((0,o.uX)(),(0,o.CE)("span",{key:0,onClick:t[0]||(t[0]=e=>r.makeTask(a.task))},"✏️")):((0,o.uX)(),(0,o.CE)("span",{key:1,onClick:t[1]||(t[1]=e=>r.makeTask(a.task))},"📚"))]),(0,o.bo)((0,o.bF)(c,{onCloseModal:t[2]||(t[2]=t=>e.showSettingsModal=!1),task:this.task},null,8,["task"]),[[n.aG,e.showSettingsModal]]),(0,o.Lk)("button",{onClick:t[3]||(t[3]=t=>e.showSettingsModal=!0)},P),(0,o.Lk)("button",{onClick:t[4]||(t[4]=t=>e.$emit("remove",a.task))},"❌")])])}const A={class:"modalInitialPart"},U={class:"modalMainPart"},R=(0,o.Lk)("div",{class:"header"},[(0,o.Lk)("h1",null,"Settings:")],-1),V={class:"innerOption"},H=(0,o.Lk)("h2",null,"Name:",-1),q=["id","value"],K={class:"innerOption"},Q=(0,o.Lk)("h2",null,"Intervals:",-1),G=["id","value"],z=["id","value"],Y={class:"innerOption"},Z=(0,o.Lk)("h2",null,"Done:",-1),ee=["id"],te={class:"innerOption"},ae=(0,o.Lk)("h2",null,"Working:",-1),ne=["id"],oe={class:"innerOption"},se={class:"modalBottomPart"},ie={class:"dangerStuff"};function le(e,t,a,s,i,r){return(0,o.uX)(),(0,o.CE)("div",{class:"modal-overlay",onClick:t[6]||(t[6]=t=>e.$emit("close-modal"))},[(0,o.Lk)("div",{class:"modalOutline",onClick:t[5]||(t[5]=(0,n.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",A,[(0,o.Lk)("button",{class:"closeModal",onClick:t[0]||(t[0]=t=>e.$emit("close-modal"))},"X")]),(0,o.Lk)("div",U,[R,(0,o.Lk)("div",V,[H,(0,o.Lk)("div",null,[(0,o.Lk)("input",{type:"text",class:"innerOptionChanger",id:this.task.id+"taskName",value:this.task.description},null,8,q)])]),(0,o.Lk)("div",K,[Q,(0,o.Lk)("div",null,[(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:this.task.id+"intervalsMade",value:this.task.intervalsMade},null,8,G),(0,o.eW)(" / "),(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:this.task.id+"totalIntervals",value:this.task.totalIntervals},null,8,z)])]),(0,o.Lk)("div",Y,[Z,(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:this.task.id+"checkboxDone","onUpdate:modelValue":t[1]||(t[1]=e=>this.task.checked=e)},null,8,ee),[[n.lH,this.task.checked]])])]),(0,o.Lk)("div",te,[ae,(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:this.task.id+"checkboxWorking","onUpdate:modelValue":t[2]||(t[2]=e=>this.task.working=e)},null,8,ne),[[n.lH,this.task.working]])])]),(0,o.Lk)("div",oe,"id: "+(0,l.v_)(this.task.id),1)]),(0,o.Lk)("div",se,[(0,o.Lk)("div",ie,[(0,o.Lk)("p",{class:"dangerText",onClick:t[3]||(t[3]=e=>r.deleteTask())},"Delete Task")]),(0,o.Lk)("button",{class:"saveSettings",onClick:t[4]||(t[4]=e=>r.saveOnLocalStorage())}," Save! ")])])])}var re={name:"TaskSettingsModal",data:()=>({showSettingsModal:!1}),props:{task:{type:Object,required:!0}},methods:{saveOnLocalStorage(){let e,t=JSON.parse(localStorage.getItem("tasks")),a=JSON.parse(localStorage.getItem("currentTask"));const n=document.getElementById(this.task.id+"taskName").value,o=parseInt(document.getElementById(this.task.id+"intervalsMade").value),s=parseInt(document.getElementById(this.task.id+"totalIntervals").value),i=document.getElementById(this.task.id+"checkboxDone").checked,l=document.getElementById(this.task.id+"checkboxWorking").checked,r=t.findIndex((e=>e.id===this.task.id));if(r>-1&&(e=t[r],e.description=n,e.intervalsMade=o,e.totalIntervals=s,e.checked=i,e.working=l),a.id!==e.id||l||localStorage.setItem("currentTask","{}"),Object.keys(a).length>0&&l){localStorage.setItem("currentTask",JSON.stringify(e));const n=t.findIndex((e=>e.id===a.id));n>-1&&(t[n].working=!1)}0===Object.keys(a).length&&l&&localStorage.setItem("currentTask",JSON.stringify(e)),localStorage.setItem("tasks",JSON.stringify(t))},deleteTask(){if(window.confirm("Do you want to really delete the Task?")){let e=JSON.parse(localStorage.getItem("tasks")),t=JSON.parse(localStorage.getItem("currentTask"));const a=e.findIndex((e=>e.id===this.task.id));if(a>-1){let n=e[a];const o=e.findIndex((e=>e.id===t.id));o>-1&&n.id===t.id&&localStorage.setItem("currentTask","{}"),e.splice(a,1),localStorage.setItem("tasks",JSON.stringify(e)),location.reload()}}}}},ce=a(241);const ue=(0,ce.A)(re,[["render",le]]);var de=ue,ke={name:"TaskComponent",components:{TaskSettingsModal:de},data:()=>({showSettingsModal:!1}),props:{task:{type:Object,required:!0}},methods:{makeTask(e){this.$emit("changeWorking",e)}}};const me=(0,ce.A)(ke,[["render",$],["__scopeId","data-v-0a5a1134"]]);var ge=me;const ve=e=>((0,o.Qi)("data-v-1142f1c6"),e=e(),(0,o.jt)(),e),pe={class:"modalInitialPart"},he={class:"modalMainPart"},Se=ve((()=>(0,o.Lk)("div",{class:"header"},[(0,o.Lk)("h1",null,"Settings:")],-1))),fe=ve((()=>(0,o.Lk)("span",null,null,-1))),Le={class:"innerOption"},Ie=ve((()=>(0,o.Lk)("h2",null,"Focus Time:",-1))),Be=["value"],Te=["value"],ye={class:"innerOption"},be=ve((()=>(0,o.Lk)("h2",null,"Litle Break:",-1))),Oe=["value"],Ce=["value"],we={class:"innerOption"},Me=ve((()=>(0,o.Lk)("h2",null,"Little Break Intervals:",-1))),xe=["value"],Ee={class:"innerOption"},Ne=ve((()=>(0,o.Lk)("h2",null,"Big Break:",-1))),Je=["value"],We=["value"],_e={class:"innerOption"},Xe=ve((()=>(0,o.Lk)("h2",null,"Sound Effect",-1))),De={class:"soundEffectOptions"},Fe=ve((()=>(0,o.Lk)("option",null,"sound1",-1))),je=ve((()=>(0,o.Lk)("option",null,"sound2",-1))),Pe=[Fe,je],$e={class:"modalBottomPart"},Ae={class:"dangerStuff"};function Ue(e,t,a,s,i,l){return(0,o.uX)(),(0,o.CE)("div",{class:"modalOverlay",onClick:t[6]||(t[6]=t=>e.$emit("close-modal"))},[(0,o.Lk)("div",{class:"modalOutline",onClick:t[5]||(t[5]=(0,n.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",pe,[(0,o.Lk)("button",{class:"closeModal",onClick:t[0]||(t[0]=t=>e.$emit("close-modal"))},"X")]),(0,o.Lk)("div",he,[Se,fe,(0,o.Lk)("div",Le,[Ie,(0,o.Lk)("div",null,[(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:"focusTimeMinutes",value:l.returnFocusTimeMinutes()},null,8,Be),(0,o.eW)(" : "),(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:"focusTimeSeconds",value:l.returnFocusTimeSeconds()},null,8,Te)])]),(0,o.Lk)("div",ye,[be,(0,o.Lk)("div",null,[(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:"lilBreakMinutes",value:l.returnLilBreakMinutes()},null,8,Oe),(0,o.eW)(" : "),(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:"lilBreakSeconds",value:l.returnLilBreakSeconds()},null,8,Ce)])]),(0,o.Lk)("div",we,[Me,(0,o.Lk)("input",{type:"number",min:"0",class:"innerOptionChanger",id:"lilBreakIntervals",value:l.returnLilBreakInterval()},null,8,xe)]),(0,o.Lk)("div",Ee,[Ne,(0,o.Lk)("div",null,[(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:"bigBreakMinutes",value:l.returnBigBreakMinutes()},null,8,Je),(0,o.eW)(" : "),(0,o.Lk)("input",{type:"number",min:"0",max:"1440",class:"innerOptionChanger",id:"bigBreakSeconds",value:l.returnBigBreakSeconds()},null,8,We)])]),(0,o.Lk)("div",_e,[Xe,(0,o.Lk)("div",De,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.audio.audio=t)},Pe,512),[[n.u1,e.audio.audio]]),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{type:"number",min:"0",max:"100",class:"innerOptionMusicVolume",id:"bigBreakMinutes","onUpdate:modelValue":t[2]||(t[2]=t=>e.audio.volume=t)},null,512),[[n.Jo,e.audio.volume]]),(0,o.eW)(" % ")])])])]),(0,o.Lk)("div",$e,[(0,o.Lk)("div",Ae,[(0,o.Lk)("p",{class:"dangerText",onClick:t[3]||(t[3]=e=>l.deleteEverything())}," Delete Everything ")]),(0,o.Lk)("button",{class:"saveSettings",onClick:t[4]||(t[4]=e=>l.saveOnLocalStorage())}," Save! ")])])])}var Re={data:()=>{const e=JSON.parse(localStorage.audio);return{audio:{audio:e.audio,volume:100*e.volume}}},methods:{returnFocusTimeMinutes(){return localStorage.focusTime<60?"00":localStorage.focusTime/60<10?"0"+localStorage.focusTime/60:Math.floor(localStorage.focusTime/60)},returnFocusTimeSeconds(){let e=localStorage.focusTime%60;return e<60?e<10?"0"+e:e:e%60},returnLilBreak(){return localStorage.lilBreak},returnLilBreakMinutes(){return localStorage.lilBreak<60?"00":localStorage.lilBreak/60<10?"0"+localStorage.lilBreak/60:Math.floor(localStorage.lilBreak/60)},returnLilBreakSeconds(){let e=localStorage.lilBreak%60;return e<60?e<10?"0"+e:e:e%60},returnBigBreakMinutes(){return localStorage.bigBreak<60?"00":localStorage.bigBreak/60<10?"0"+localStorage.bigBreak/60:Math.floor(localStorage.bigBreak/60)},returnBigBreakSeconds(){let e=localStorage.bigBreak%60;return e<60?e<10?"0"+e:e:e%60},returnBigBreak(){return localStorage.bigBreak},returnLilBreakInterval(){return localStorage.maxLilBreaks},deleteEverything(){window.confirm("Do you want to really delete everything?")&&(localStorage.clear(),location.reload())},saveOnLocalStorage(){const e=parseInt(60*document.getElementById("focusTimeMinutes").value)+parseInt(document.getElementById("focusTimeSeconds").value),t=parseInt(60*document.getElementById("lilBreakMinutes").value)+parseInt(document.getElementById("lilBreakSeconds").value),a=parseInt(60*document.getElementById("bigBreakMinutes").value)+parseInt(document.getElementById("bigBreakSeconds").value),n={audio:this.audio.audio,volume:this.audio.volume/100},o=parseInt(document.getElementById("lilBreakIntervals").value);localStorage.focusTime=e,localStorage.lilBreak=t,localStorage.bigBreak=a,localStorage.audio=JSON.stringify(n),localStorage.maxLilBreaks=o,location.reload()}}};const Ve=(0,ce.A)(Re,[["render",Ue],["__scopeId","data-v-1142f1c6"]]);var He=Ve;const qe=Object.freeze({focus:"focusTime",littleBreak:"lilBreakTime",bigBreak:"bigBreakTime"});var Ke=qe;const Qe=a(524);var Ge={name:"HomeComponent",components:{Task:ge,SettingsModal:He},setup(){const e=(0,w.KR)({buttonTrigger:!1}),t=t=>{e.value[t]=!e.value[t]};return{popupTriggers:e,togglePopup:t}},data:()=>{const e=localStorage.focusTime,t=localStorage.lilBreak,a=localStorage.bigBreak,n=localStorage.currentState,o=localStorage.currentTimeInSeconds;var s,i="";const l=JSON.parse(localStorage.getItem("audio"));return n===Ke.focus&&(s=e),n===Ke.littleBreak&&(s=t),n===Ke.bigBreak&&(s=a),s>o&&(s=o),localStorage.currentTask&&(i=JSON.parse(localStorage.currentTask)),{currentTimeInSeconds:s,currentState:n,focusTime:e,lilBreakTime:t,bigBreakTime:a,timeRunning:!1,playButtonShow:!0,tasks:JSON.parse(localStorage.tasks),task:{checked:!1,intervalsMade:0,totalIntervals:1},audio:{audio:l.audio,volume:l.volume},currentTask:i,showSettingsModal:!1}},methods:{handleSettingsButton(){},handleTimeButton(){this.playButtonShow=!this.playButtonShow,this.timeRunning?(this.stopClock(),this.timeRunning=!1,localStorage.setItem("currentTimeInSeconds",this.currentTimeInSeconds)):(this.playClock(),this.timeRunning=!0)},handleSkipButton(){this.passCurrentState()},playClock(){this.interval=setInterval((()=>{0!=this.currentTimeInSeconds&&(this.currentTimeInSeconds-=1)}),1e3)},stopClock(){clearInterval(this.interval)},addTask(e){let t=JSON.parse(localStorage.getItem("tasks"));if(e.id=Date.now(),""===e.description||void 0===e.description)return void alert("You need to add a name for the task!");for(let n=0;n<t.length;n++)if(t[n].description===e.description)return void alert("Task name already exists!");if(!e.totalIntervals)return void alert("Make sure you insert the number os intervals!");let a={id:e.id,description:e.description,checked:e.checked,totalIntervals:e.totalIntervals,intervalsMade:0};a.working=t<1,t.push(a),localStorage.setItem("tasks",JSON.stringify(t)),""===this.currentTask&&(localStorage.currentTask=JSON.stringify(a),this.currentTask=a),this.tasks.push(a),this.task={checked:!1,intervalsMade:0}},removeTask(e){if(window.confirm("Do you really want to delete the task?")){let t=JSON.parse(localStorage.getItem("tasks"));this.currentTask.id===e.id&&(localStorage.setItem("currentTask","{}"),this.currentTask="");const a=t.findIndex((t=>t.id===e.id));a>-1&&t.splice(a,1),localStorage.setItem("tasks",JSON.stringify(t));const n=this.tasks.findIndex((t=>t.id===e.id));n>-1&&this.tasks.splice(n,1)}},changeWorking(e){const t=JSON.parse(localStorage.getItem("tasks"));let a;if(this.currentTask&&(a=t.findIndex((e=>e.id===this.currentTask.id)),a>-1)){t[a].working=!1;let e=this.tasks[a];e.working=!1}const n=t.findIndex((t=>t.id===e.id));if(n>-1){const a=!t[n].working;t[n].working=a,e.working=!0}localStorage.setItem("tasks",JSON.stringify(t)),localStorage.setItem("currentTask",JSON.stringify(e)),this.currentTask=e},addInterval(e){let t=JSON.parse(localStorage.getItem("tasks"));const a=t.findIndex((t=>t.id===e.id));if(a>-1){const e=t[a];!e.checked&&e.intervalsMade+1>=e.totalIntervals&&(e.checked=!0),e.intervalsMade=e.intervalsMade+1,localStorage.setItem("tasks",JSON.stringify(t))}const n=this.tasks.findIndex((t=>t.id===e.id));if(n>-1){const e=this.tasks[n];e.intervalsMade=e.intervalsMade+1}this.stopClock()},passCurrentState(){const e=localStorage.getItem("currentState"),t=parseInt(localStorage.getItem("lilBreaksCounter")),a=parseInt(localStorage.getItem("maxLilBreaks"));if(e===Ke.focus){if(t<a){localStorage.setItem("currentState",Ke.littleBreak),this.currentState=Ke.littleBreak;let e=localStorage.lilBreak;this.currentTimeInSeconds=e,localStorage.setItem("currentTimeInSeconds",e),localStorage.setItem("lilBreaksCounter",t+1)}else{localStorage.setItem("currentState",Ke.bigBreak),this.currentState=Ke.bigBreak;let e=localStorage.bigBreak;this.currentTimeInSeconds=e,localStorage.setItem("currentTimeInSeconds",e),localStorage.setItem("lilBreaksCounter",0)}this.addIntervalTask(this.currentTask)}else{localStorage.setItem("currentState",Ke.focus),this.currentState=Ke.focus;let e=localStorage.focusTime;this.currentTimeInSeconds=e,localStorage.setItem("currentTimeInSeconds",e)}},addIntervalTask(e){const t=this.tasks.findIndex((t=>t.id===e.id));t>-1&&this.addInterval(this.tasks[t])}},computed:{timeDisplay(){let e,t,n,o;if(this.currentTimeInSeconds<60?(n=0,o=this.currentTimeInSeconds,e="00",t=("0"+this.currentTimeInSeconds).slice(-2)):(n=parseInt(this.currentTimeInSeconds/60),o=this.currentTimeInSeconds%60,e=("0"+n).slice(-2),t=("0"+o).slice(-2)),0===n&&0===o){this.passCurrentState();var s=new Audio(a(981)(`./${this.audio.audio}.mp3`));s.volume=this.audio.volume,s.play()}return`${e}:${t}`}},beforeCreate(){"undefined"!==typeof Storage?localStorage.focusTime||(localStorage.focusTime=Qe.focusTime,localStorage.lilBreak=Qe.lilBreak,localStorage.bigBreak=Qe.bigBreak,localStorage.currentState=Qe.startState,localStorage.lilBreaksCounter=Qe.lilBreaksCounter,localStorage.tasks=Qe.tasks,localStorage.currentTask=Qe.currentTask,localStorage.maxLilBreaks=Qe.maxLilBreaks,localStorage.audio=JSON.stringify(Qe.audio)):alert("There is no suport to localStorage!")}};const ze=(0,ce.A)(Ge,[["render",C],["__scopeId","data-v-462e030e"]]);var Ye=ze,Ze={name:"App",components:{Home:Ye},watch:{items:{handler(e,t){console.log(t+" --\x3e "+e)},deep:!0}}};const et=(0,ce.A)(Ze,[["render",i]]);var tt=et,at=a(789),nt=a(402),ot=a(583),st=a(627);(0,at.oe)(nt.gSK,ot.vv7,st.vTn,st.yOD),(0,n.Ef)(tt).component("v-icon",at.Ly).mount("#app")},524:function(e){e.exports={focusTime:1500,lilBreak:300,bigBreak:900,lilBreaksCounter:0,maxLilBreaks:3,startState:"focusTime",currentState:"focusTime",tasks:"[]",currentTask:"{}",audio:{audio:"sound2",volume:.1}}},981:function(e,t,a){var n={"./sound1.mp3":600,"./sound2.mp3":327};function o(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=981},600:function(e,t,a){"use strict";e.exports=a.p+"media/sound1.0ee4792f.mp3"},327:function(e,t,a){"use strict";e.exports=a.p+"media/sound2.da32e805.mp3"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var l=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/pomoCore/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],l=n[1],r=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(r)var u=r(a)}for(t&&t(n);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkpomocore"]=self["webpackChunkpomocore"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(507)}));n=a.O(n)})();
//# sourceMappingURL=app.18237fe9.js.map