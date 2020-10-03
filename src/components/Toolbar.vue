<template>
  <div>
    <div class="fab" @keyup.enter="myMthod">
      <span
        class="fab-action-button"
        v-bind:class="{
          active: accessibilityStates.shortKey == 'Esc',
        }"
      >
        <i class="material-icons fab-action-button-icon"> call_made </i>
      </span>
      <transition name="fade">
        <div class="accessibility-toolbar">
          <ul class="accessibility-items">
            <li
              class="accessibility-item"
              v-bind:key="index"
              v-for="(tool, index) in tools"
            >
              <a
                class="accessibility-menu-item"
                v-bind:data-tooltip="tool.title"
                v-bind:data-key="tool.shortKey"
                v-bind:class="{
                  active: accessibilityStates.title == tool.title,
                }"
                @click="toggleState(tool)"
                v-bind:aria-label="tool.title"
              >
                <i class="material-icons accessibility-menu-item-icon">
                  {{ tool.title }}
                </i>
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <p class="text">
      Your selected tool: <strong>{{ accessibilityStates.title }}</strong> / wich its shortkey is
      : <strong>{{ accessibilityStates.shortKey }}</strong>
    </p>
  </div>
</template>

<script>
import { loadData } from "../helper/data";

export default {
  name: "Toolbar",
  props: {},
  data() {
    return {
      tools: loadData(),
      accessibilityStates: {
      title: "hand mode",
      icon: "call_made",
      shortKey: 'Esc',
    },
      showToolbar: true,
    };
  },
  methods: {
    toggleState(state) {
      this.accessibilityStates = state;
    },
    myMthod(event) {
      if (event.keyCode === 27) {
        this.accessibilityStates = {
          title: "hand mode",
          icon: "call_made",
          shortKey: 'Esc',
        };
      } else {
        if (event.keyCode >= 97 && event.keyCode <= 101) {
          Array.apply(null, { length: 5 })
            .map(Number.call, Number)
            .forEach((element) => {
              if (event.keyCode === 97 + element) {
                this.accessibilityStates = this.tools[element];
                return;
              }
            });
        }
      }
    },
  },
  created: function () {
    document.addEventListener("keyup", this.myMthod);     
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

[data-tooltip]:before {
  position: absolute;
  bottom: 105%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

[data-tooltip]:after {
  position: absolute;
  bottom: 105%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  opacity: 1;
}

.accessibility-items {
  list-style-type: none;
}
.accessibility-toolbar {
  width: 300px;
  position: absolute;
  left: 65px;
  bottom: 50%;
  margin-bottom: 2px;
}
.accessibility-menu-item-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.accessibility-menu-item {
  border-radius: 100px;
  border: 2px solid #2196f3;
  text-align: center;
  float: left;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  background: white;
  color: black;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.accessibility-menu-item:hover {
  background: #2196f3;
}

.active {
  color: #fff !important;
  background-color: #2196f3;
}
.text {
    text-align: center;
    padding-top: 100px;
    font-size: 20px;
}
strong{
  text-transform: uppercase;
}
</style>
<style scoped>
.fab {
  position: fixed;
  width: 56px;
  left: 3vw;
  top: 130px;
  z-index: 999;
}
.fab-action-button {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  display: block;
  width: 56px;
  height: 56px;
  background-color: #bccabb;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.fab-action-button.active {
  background: #61c155;
}
.fab-action-button-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 37px !important;
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
      format("woff2");
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>