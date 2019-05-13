<template>
   <div>
      <h3 style="padding-left:37%;padding-bottom:30px">欢迎注册</h3>
      <p style="margin-left:20px"><span>已有账号？</span><router-link to="/login"><a href="javascript:;">立即登录</a></router-link></p>
      <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('数字/字母/符号/，6-10位')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <router-link to="/login">
      <van-button size="normal" >注册</van-button>
    </router-link>
  </div> 
</template>
<script>
export default {
 
}
</script>
