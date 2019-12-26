
<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/26
 * desc: 登陆页
 */
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

// 请求
import SkmService from '@/services/skm';

@Component({
  name: 'login',
  components: {},
})
export default class Login extends Vue {
  // @ts-nocheck
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  private mounted() {
    this.init();
  };

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private content: any = '';
  private userData: object = {
      username: 'superOldman',
      password: '1',
  };
  private registerData: object = {
      username: '',
      email:'',
      password: '',
  };
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private init() {
      var Auth = {
        vars: {
          lowin: document.querySelector('.lowin') as any,
          lowin_brand: document.querySelector('.lowin-brand') as any,
          lowin_wrapper: document.querySelector('.lowin-wrapper') as any,
          lowin_login: document.querySelector('.lowin-login') as any,
          lowin_wrapper_height: 0 as any,
          login_back_link: document.querySelector('.login-back-link') as any,
          forgot_link: document.querySelector('.forgot-link') as any,
          login_link: document.querySelector('.login-link') as any,
          login_btn: document.querySelector('.login-btn') as any,
          register_link: document.querySelector('.register-link') as any,
          password_group: document.querySelector('.password-group') as any,
          password_group_height: 0 as any,
          lowin_register: document.querySelector('.lowin-register') as any,
          lowin_footer: document.querySelector('.lowin-footer') as any,
          box: document.getElementsByClassName('lowin-box') as any,
          option: {}
        },
        register(e:any) {
          Auth.vars.lowin_login.className += ' lowin-animated';
          setTimeout(() => {
            Auth.vars.lowin_login.style.display = 'none';
          }, 500);
          Auth.vars.lowin_register.style.display = 'block';
          Auth.vars.lowin_register.className += ' lowin-animated-flip';
          Auth.setHeight(
            Auth.vars.lowin_register.offsetHeight +
              Auth.vars.lowin_footer.offsetHeight
          );
          e.preventDefault();
        },
        login(e:any) {
          Auth.vars.lowin_register.classList.remove('lowin-animated-flip');
          Auth.vars.lowin_register.className += ' lowin-animated-flipback';
          Auth.vars.lowin_login.style.display = 'block';
          Auth.vars.lowin_login.classList.remove('lowin-animated');
          Auth.vars.lowin_login.className += ' lowin-animatedback';
          setTimeout(() => {
            Auth.vars.lowin_register.style.display = 'none';
          }, 500);
          setTimeout(() => {
            Auth.vars.lowin_register.classList.remove('lowin-animated-flipback');
            Auth.vars.lowin_login.classList.remove('lowin-animatedback');
          }, 1000);
          Auth.setHeight(
            Auth.vars.lowin_login.offsetHeight + Auth.vars.lowin_footer.offsetHeight
          );
          e.preventDefault();
        },
        forgot(e:any) {
          Auth.vars.password_group.classList += ' lowin-animated';
          Auth.vars.login_back_link.style.display = 'block';
          setTimeout(() => {
            Auth.vars.login_back_link.style.opacity = 1;
            Auth.vars.password_group.style.height = 0;
            Auth.vars.password_group.style.margin = 0;
          }, 100);
          Auth.vars.login_btn.innerText = 'Forgot Password';
          Auth.setHeight(
            Auth.vars.lowin_wrapper_height - Auth.vars.password_group_height
          );
          Auth.vars.lowin_login
            .querySelector('form')
            .setAttribute('action', Auth.vars.option.forgot_url);
          e.preventDefault();
        },
        loginback(e:any) {
          Auth.vars.password_group.classList.remove('lowin-animated');
          Auth.vars.password_group.classList += ' lowin-animated-back';
          Auth.vars.password_group.style.display = 'block';
          setTimeout(() => {
            Auth.vars.login_back_link.style.opacity = 0;
            Auth.vars.password_group.style.height =
              Auth.vars.password_group_height + 'px';
            Auth.vars.password_group.style.marginBottom = 30 + 'px';
          }, 100);
          setTimeout(() => {
            Auth.vars.login_back_link.style.display = 'none';
            Auth.vars.password_group.classList.remove('lowin-animated-back');
          }, 1000);
          Auth.vars.login_btn.innerText = 'Sign In';
          Auth.vars.lowin_login
            .querySelector('form')
            .setAttribute('action', Auth.vars.option.login_url);
          Auth.setHeight(Auth.vars.lowin_wrapper_height);
          e.preventDefault();
        },
        setHeight(height:number) {
          Auth.vars.lowin_wrapper.style.minHeight = height + 'px';
        },
        brand() {
          Auth.vars.lowin_brand.classList += ' lowin-animated';
          setTimeout(() => {
            Auth.vars.lowin_brand.classList.remove('lowin-animated');
          }, 1000);
        },
        init(option:object) {
          Auth.setHeight(
            Auth.vars.box[0].offsetHeight + Auth.vars.lowin_footer.offsetHeight
          );
          Auth.vars.password_group.style.height =
            Auth.vars.password_group.offsetHeight + 'px';
          Auth.vars.password_group_height = Auth.vars.password_group.offsetHeight;
          Auth.vars.lowin_wrapper_height = Auth.vars.lowin_wrapper.offsetHeight;
          Auth.vars.option = option;
          Auth.vars.lowin_login
            .querySelector('form')
            .setAttribute('action', option.login_url);
          var len = Auth.vars.box.length - 1;
          for (var i = 0; i <= len; i++) {
            if (i !== 0) {
              Auth.vars.box[i].className += ' lowin-flip';
            }
          }
          Auth.vars.forgot_link.addEventListener('click', (e:object) => {
            Auth.forgot(e);
          });
          Auth.vars.register_link.addEventListener('click', (e:object) => {
            Auth.brand();
            Auth.register(e);
          });
          Auth.vars.login_link.addEventListener('click', (e:object) => {
            Auth.brand();
            Auth.login(e);
          });
          Auth.vars.login_back_link.addEventListener('click', (e:object) => {
            Auth.loginback(e);
          });
        }
      }
      Auth.init({
        login_url: '#login',
        forgot_url: '#forgot',
      });
  };
  private login(){
    // console.log(this.userData);
    let self = this;
    SkmService.signin(this.userData).then(function(){
      console.log('登陆成功！');
      self.$router.push({name: 'editor'})
    })
    // SkmService.search()
  };
  private register(){
     let self = this;
    SkmService.register(this.registerData).then(function(){
      console.log('登陆成功！');
      self.$router.push({name: 'editor'})
    })
  };






}

</script>

<template>
<layout>
    <div class="lowin">
      <div class="lowin-brand">
        <img src="kodinger.jpg" alt="logo" />
      </div>
      <div class="lowin-wrapper">
        <!-- 登陆 -->
        <div class="lowin-box lowin-login">
          <div class="lowin-box-inner">
            <form>
              <p>Sign in to continue</p>
              <div class="lowin-group">
                <label>Email <span  class="login-back-link">Sign in?</span></label>
                <input
                  type="email"
                  autocomplete="email"
                  name="email"
                  v-model="userData.username"
                  class="lowin-input username"
                />
              </div>
              <div class="lowin-group password-group">
                <label>Password<span class="forgot-link">Forgot Password?</span></label>
                <input
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  class="lowin-input passwd"
                  v-model="userData.password"
                />
              </div>
              <div  @click="login" class="lowin-btn login-btn loginBtn">
                Sign In
              </div>
              <div class="text-foot">
                Don't have an account?
                <span class="register-link">Register</span>
              </div>
            </form>
          </div>
        </div>

        <!-- 注册 -->
        <div class="lowin-box lowin-register">
          <div class="lowin-box-inner">
            <form>
              <p>Let's create your account</p>
              <div class="lowin-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  autocomplete="name"
                  class="lowin-input"
                  v-model="registerData.username"
                />
              </div>
              <div class="lowin-group">
                <label>Email</label>
                <input
                  type="email"
                  autocomplete="email"
                  name="email"
                  class="lowin-input"
                  v-model="registerData.email"
                />
              </div>
              <div class="lowin-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  class="lowin-input"
                  v-model="registerData.password"
                />
              </div>
              <div class="lowin-btn" @click="register">注册</div>
              <div class="text-foot">
                Already have an account? <a href="" class="login-link">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="lowin-footer"></footer>
    </div>
</layout>    
</template>

<style  scoped>
body {
  margin: 0;
  background-color: #fbfbfb;
  text-align: center;
}
.lowin {
  --color-primary: #44a0b3;
  --color-grey: rgba(68, 160, 179, 0.06);
  --color-dark: rgba(68, 160, 179, 0.5);
  --color-semidark: rgba(68, 160, 179, 0.5);
  text-align: center;
  margin: 60px 0 0;
  font-family: segoe ui;
  font-size: 14px;
}
.lowin .lowin-wrapper {
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  position: relative;
  height: 100%;
  width: 360px;
  margin: 0 auto;
}
.lowin.lowin-red {
  --color-primary: #ff6464;
  --color-grey: rgba(255, 100, 100, 0.06);
  --color-dark: rgba(255, 100, 100, 0.8);
  --color-semidark: rgba(255, 100, 100, 0.55);
}
.lowin.lowin-green {
  --color-primary: #d0ef84;
  --color-grey: rgba(208, 239, 132, 0.15);
  --color-dark: rgba(208, 239, 132, 1);
  --color-semidark: rgba(208, 239, 132, 0.6);
}
.lowin.lowin-purple {
  --color-primary: #6c567b;
  --color-grey: rgba(108, 86, 123, 0.08);
  --color-dark: rgba(108, 86, 123, 0.7);
  --color-semidark: rgba(108, 86, 123, 0.45);
}
.lowin.lowin-blue {
  --color-primary: #0081c6;
  --color-grey: rgba(0, 129, 198, 0.05);
  --color-dark: rgba(0, 129, 198, 0.7);
  --color-semidark: rgba(0, 129, 198, 0.45);
}
.lowin a {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px dashed var(--color-semidark);
  margin-top: -3px;
  padding-bottom: 2px;
}
.lowin * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.lowin .lowin-brand {
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 0 auto -50px;
  border-radius: 50%;
  -webkit-box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
  padding: 10px;
  background-color: #fff;
  z-index: 1;
  position: relative;
}
.lowin .lowin-brand img {
  width: 100%;
}
.lowin .lowin-box {
  width: 100%;
  position: absolute;
  left: 0;
}
.lowin .lowin-box-inner {
  background-color: #fff;
  -webkit-box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  padding: 60px 25px 25px;
  text-align: left;
  border-radius: 3px;
}
.lowin .lowin-box::after {
  content: ' ';
  -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate(0, -92.6%) scale(0.88);
  -ms-transform: translate(0, -92.6%) scale(0.88);
  transform: translate(0, -92.6%) scale(0.88);
  border-radius: 3px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
}
.lowin .lowin-box.lowin-flip {
  -webkit-transform: rotate3d(0, 1, 0, -180deg);
  transform: rotate3d(0, 1, 0, -180deg);
  display: none;
  opacity: 0;
}
.lowin .lowin-box p {
  color: var(--color-semidark);
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}
.lowin .lowin-box .lowin-group {
  margin-bottom: 30px;
}
.lowin .lowin-box label {
  margin-bottom: 5px;
  display: inline-block;
  width: 100%;
  color: var(--color-semidark);
  font-weight: 700;
}
.lowin .lowin-box label a {
  float: right;
}
.lowin .lowin-box .lowin-input {
  background-color: var(--color-grey);
  color: var(--color-dark);
  border: 0;
  border-radius: 3px;
  padding: 15px 20px;
  width: 100%;
  outline: 0;
}
.lowin .lowin-box .lowin-btn {
  display: inline-block;
  width: 100%;
  border: 0;
  color: #fff;
  padding: 15px;
  border-radius: 3px;
  background-color: var(--color-primary);
  -webkit-box-shadow: 0 2px 7px var(--color-semidark);
  box-shadow: 0 2px 7px var(--color-semidark);
  font-weight: 700;
  outline: 0;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.lowin .lowin-box .lowin-btn:active {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.lowin .lowin-box .lowin-btn:hover {
  opacity: 0.9;
}
.lowin .text-foot {
  text-align: center;
  padding: 10px;
  font-weight: 700;
  margin-top: 20px;
  color: var(--color-semidark);
}
.lowin .lowin-footer {
  text-align: center;
  margin: 30px 0;
  font-size: 12px;
  color: var(--color-semidark);
  font-weight: 700;
}
.lowin .login-back-link {
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  display: none;
  opacity: 0;
}
.lowin .lowin-box.lowin-animated {
  -webkit-animation-name: LowinAnimated;
  animation-name: LowinAnimated;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
.lowin .lowin-box.lowin-animatedback {
  -webkit-animation-name: LowinAnimatedBack;
  animation-name: LowinAnimatedBack;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
.lowin .lowin-box.lowin-animated-flip {
  -webkit-animation-name: LowinAnimatedFlip;
  animation-name: LowinAnimatedFlip;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
.lowin .lowin-box.lowin-animated-flipback {
  -webkit-animation-name: LowinAnimatedFlipBack;
  animation-name: LowinAnimatedFlipBack;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
.lowin .lowin-brand.lowin-animated {
  -webkit-animation-name: LowinBrandAnimated;
  animation-name: LowinBrandAnimated;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
.lowin .lowin-group.password-group {
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
.lowin .lowin-group.password-group.lowin-animated {
  -webkit-animation-name: LowinPasswordAnimated;
  animation-name: LowinPasswordAnimated;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
.lowin .lowin-group.password-group.lowin-animated-back {
  -webkit-animation-name: LowinPasswordAnimatedBack;
  animation-name: LowinPasswordAnimatedBack;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
@-webkit-keyframes LowinAnimated {
  0% {
    -webkit-transform: rotate3d(0);
    transform: rotate3d(0);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate3d(0, 1, 0, 180deg);
    transform: rotate3d(0, 1, 0, 180deg);
  }
}
@keyframes LowinAnimated {
  0% {
    -webkit-transform: rotate3d(0);
    transform: rotate3d(0);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate3d(0, 1, 0, 180deg);
    transform: rotate3d(0, 1, 0, 180deg);
  }
}
@-webkit-keyframes LowinAnimatedBack {
  0% {
    opacity: 0;
    -webkit-transform: rotate3d(0, 1, 0, 180deg);
    transform: rotate3d(0, 1, 0, 180deg);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate3d(0);
    transform: rotate3d(0);
  }
}
@keyframes LowinAnimatedBack {
  0% {
    opacity: 0;
    -webkit-transform: rotate3d(0, 1, 0, 180deg);
    transform: rotate3d(0, 1, 0, 180deg);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate3d(0);
    transform: rotate3d(0);
  }
}
@-webkit-keyframes LowinAnimatedFlip {
  0% {
    -webkit-transform: rotate3d(0, 1, 0, -180deg);
    transform: rotate3d(0, 1, 0, -180deg);
    opacity: 0;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate3d(0, 0, 0, 180deg);
    transform: rotate3d(0, 0, 0, 180deg);
  }
}
@keyframes LowinAnimatedFlip {
  0% {
    -webkit-transform: rotate3d(0, 1, 0, -180deg);
    transform: rotate3d(0, 1, 0, -180deg);
    opacity: 0;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate3d(0, 0, 0, 180deg);
    transform: rotate3d(0, 0, 0, 180deg);
  }
}
@-webkit-keyframes LowinAnimatedFlipBack {
  0% {
    opacity: 1;
    -webkit-transform: rotate3d(0, 0, 0, 180deg);
    transform: rotate3d(0, 0, 0, 180deg);
  }
  95% {
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate3d(0, 1, 0, -180deg);
    transform: rotate3d(0, 1, 0, -180deg);
    opacity: 0;
  }
}
@keyframes LowinAnimatedFlipBack {
  0% {
    opacity: 1;
    -webkit-transform: rotate3d(0, 0, 0, 180deg);
    transform: rotate3d(0, 0, 0, 180deg);
  }
  95% {
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate3d(0, 1, 0, -180deg);
    transform: rotate3d(0, 1, 0, -180deg);
    opacity: 0;
  }
}
@-webkit-keyframes LowinBrandAnimated {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, -120px);
    transform: translate(0, -120px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes LowinBrandAnimated {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, -120px);
    transform: translate(0, -120px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-webkit-keyframes LowinPasswordAnimated {
  0% {
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate3d(1, 0, 0, -180deg);
    transform: rotate3d(1, 0, 0, -180deg);
    z-index: -1;
  }
}
@keyframes LowinPasswordAnimated {
  0% {
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate3d(1, 0, 0, -180deg);
    transform: rotate3d(1, 0, 0, -180deg);
    z-index: -1;
  }
}
@-webkit-keyframes LowinPasswordAnimatedBack {
  0% {
    opacity: 0;
    -webkit-transform: rotate3d(1, 0, 0, -180deg);
    transform: rotate3d(1, 0, 0, -180deg);
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
  }
}
@keyframes LowinPasswordAnimatedBack {
  0% {
    opacity: 0;
    -webkit-transform: rotate3d(1, 0, 0, -180deg);
    transform: rotate3d(1, 0, 0, -180deg);
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
  }
}
@media screen and (max-width: 320px) {
  .lowin .lowin-wrapper {
    width: 100%;
  }
  .lowin .lowin-box {
    padding: 0 10px;
  }
}


</style>
