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
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private content: any = '';
  private userData: object = {
      username: 'superOldman',
      password: '1',
  };
  private registerData: object = {
      username: '',
      email: '',
      password: '',
  };
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private init() {
      const Auth = {
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
          option: {} as any,
        },
        register(e: any) {
          Auth.vars.lowin_login.className += ' lowin-animated';
          setTimeout(() => {
            Auth.vars.lowin_login.style.display = 'none';
          }, 500);
          Auth.vars.lowin_register.style.display = 'block';
          Auth.vars.lowin_register.className += ' lowin-animated-flip';
          Auth.setHeight(
            Auth.vars.lowin_register.offsetHeight +
              Auth.vars.lowin_footer.offsetHeight,
          );
          e.preventDefault();
        },
        login(e: any) {
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
          Auth.setHeight(Auth.vars.lowin_login.offsetHeight + Auth.vars.lowin_footer.offsetHeight);
          e.preventDefault();
        },
        forgot(e: any) {
          Auth.vars.password_group.classList += ' lowin-animated';
          Auth.vars.login_back_link.style.display = 'block';
          setTimeout(() => {
            Auth.vars.login_back_link.style.opacity = 1;
            Auth.vars.password_group.style.height = 0;
            Auth.vars.password_group.style.margin = 0;
          }, 100);
          Auth.vars.login_btn.innerText = 'Forgot Password';
          Auth.setHeight(Auth.vars.lowin_wrapper_height - Auth.vars.password_group_height);
          Auth.vars.lowin_login
            .querySelector('form')
            .setAttribute('action', Auth.vars.option.forgot_url);
          e.preventDefault();
        },
        loginback(e: any) {
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
        setHeight(height: number) {
          Auth.vars.lowin_wrapper.style.minHeight = height + 'px';
        },
        brand() {
          Auth.vars.lowin_brand.classList += ' lowin-animated';
          setTimeout(() => {
            Auth.vars.lowin_brand.classList.remove('lowin-animated');
          }, 1000);
        },
        init(option: any) {
          Auth.setHeight(Auth.vars.box[0].offsetHeight + Auth.vars.lowin_footer.offsetHeight);
          Auth.vars.password_group.style.height =
            Auth.vars.password_group.offsetHeight + 'px';
          Auth.vars.password_group_height = Auth.vars.password_group.offsetHeight;
          Auth.vars.lowin_wrapper_height = Auth.vars.lowin_wrapper.offsetHeight;
          Auth.vars.option = option;
          Auth.vars.lowin_login
            .querySelector('form')
            .setAttribute('action', option.login_url);
          const len = Auth.vars.box.length - 1;
          for ( let i = 0; i <= len; i++) {
            if (i !== 0) {
              Auth.vars.box[i].className += ' lowin-flip';
            }
          }
          Auth.vars.forgot_link.addEventListener('click', (e: object) => {
            Auth.forgot(e);
          });
          Auth.vars.register_link.addEventListener('click', (e: object) => {
            Auth.brand();
            Auth.register(e);
          });
          Auth.vars.login_link.addEventListener('click', (e: object) => {
            Auth.brand();
            Auth.login(e);
          });
          Auth.vars.login_back_link.addEventListener('click', (e: object) => {
            Auth.loginback(e);
          });
        },
      };
      Auth.init({
        login_url: '#login',
        forgot_url: '#forgot',
      });
  }
  private login() {
    const self = this;
    SkmService.signin(this.userData).then((data) => {
      if (data.code === 0) {
        console.log('登陆成功！');
        self.$router.push({name: 'editor'});
      }
    });
  }
  private register() {
    const self = this;
    SkmService.register(this.registerData).then(() => {
      console.log('注册成功！');
      self.$router.push({name: 'editor'});
    });
  }
}

</script>

<template>
<layout>
    <div class="lowin">
      <div class="lowin-brand">
        <img src="./kodinger.jpg" alt="logo" />
      </div>
      <div class="lowin-wrapper">
        <!-- 登陆 -->
        <div class="lowin-box lowin-login">
          <div class="lowin-box-inner">
            <form>
              <p>Sign in to continue</p>
              <div class="lowin-group">
                <label>邮箱 <span  class="login-back-link">登陆?</span></label>
                <input
                  type="email"
                  autocomplete="email"
                  name="email"
                  v-model="userData.username"
                  class="lowin-input username"
                />
              </div>
              <div class="lowin-group password-group">
                <label>密码<span class="forgot-link">忘记密码?</span></label>
                <input
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  class="lowin-input passwd"
                  v-model="userData.password"
                />
              </div>
              <div  @click="login" class="lowin-btn login-btn loginBtn">
                登陆
              </div>
              <div class="text-foot">
                没有账号?
                <span class="register-link">注册</span>
              </div>
            </form>
          </div>
        </div>

        <!-- 注册 -->
        <div class="lowin-box lowin-register">
          <div class="lowin-box-inner">
            <form>
              <p>创建你的账号</p>
              <div class="lowin-group">
                <label>用户名</label>
                <input
                  type="text"
                  name="username"
                  autocomplete="username"
                  class="lowin-input"
                  v-model="registerData.username"
                />
              </div>
              <div class="lowin-group">
                <label>邮箱</label>
                <input
                  type="email"
                  autocomplete="email"
                  name="email"
                  class="lowin-input"
                  v-model="registerData.email"
                />
              </div>
              <div class="lowin-group">
                <label>密码</label>
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
                已经有账号? <a href="" class="login-link">登陆</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="lowin-footer"></footer>
    </div>
</layout>    
</template>
<style lang="stylus" scoped>
// @import './login.styl'
@import './login.css'

</style>

