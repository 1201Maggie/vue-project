<template>
    <div class="user">
        <div class="maincontainer">
            <div class="container" style="max-width:768px;margin:0 auto;">
                <div class="row">
                    <a href="javascript:;">
                        <div class="member_top member_top_1">
                            <div class="member_top_bg"><img  src="../assets/images/member_bg.png"></div>
                            <div class="member_m_pic member_m_pic_1">
                                <router-link to="/login">
                                    <img class="img-circle" src="../assets/images/noavatar.png">
                                </router-link>
                            </div>
                            <div  class="member_m_z member_m_z_1">
                                <div class="member_m_x"></div>
                            </div>
                            <div class="member_m_r">账户管理、收货地址&gt;</div>
                        </div>
                    </a>
                    <div class="list-group mb10">
                        <a href="javascript:;" class="list-group-item tip">
                            <div class="list_group_img"><img src="../assets/images/member_img16.png"></div>
                            我的订单
                            <span class="gary pull-right">查看全部</span>
                        </a>
                        <div class="list-group-item p0 clearfix">
                            <div class="col-xs-3 p0">
                                <a class="order_tab_link" href="javascript:;">
                                    <em class="order_img"><img src="../assets/images/order_bg_3.png"></em>待付款
                                </a>
                            </div>
                            <div class="col-xs-3 p0">
                                <a class="order_tab_link" href="javascript:;">
                                    <em class="order_img"><img src="../assets/images/order_bg_2.png"></em>待发货
                                </a>
                            </div>
                            <div class="col-xs-3 p0">
                                <a class="order_tab_link" href="javascript:;">
                                    <em class="order_img"><img src="../assets/images/order_bg_1.png"></em>待收货
                                </a>
                            </div>
                            <div class="col-xs-3 p0">
                                <a class="order_tab_link" href="javascript:;">
                                    <em class="order_img"><img src="../assets/images/order_bg.png"></em>已完成
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group mb10 member_list_group clearfix">
                        <a href="javascript:;" class="list-group-item col-xs-4">
                            <div class="m_img"><img src="../assets/images/order_bg_5.png"></div>
                            <p class="m_name">我的收藏</p>
                            <span class="red">0</span>
                        </a>
                        <a href="javascript:;" class="list-group-item col-xs-4">
                            <div class="m_img"><img src="../assets/images/order_bg_8.png"></div>
                            <p class="m_name">我的评论</p>
                            <span class="red">&nbsp;&nbsp;</span>
                        </a>
                        <a href="javascript:;" class="list-group-item col-xs-4">
                            <div class="m_img"><img src="../assets/images/order_bg_4.png"></div>
                            <p class="m_name">收件箱</p>
                            <span class="red">&nbsp;&nbsp;</span>
                        </a>
                        <a href="javascript:;" class="list-group-item col-xs-4">
                            <div class="m_img"><img src="../assets/images/order_bg_7.png"></div>
                            <p class="m_name">系统消息</p>
                            <span class="red">&nbsp;&nbsp;</span>
                        </a>
                    </div>
                            
                    <div class="list-group mb10">
                        <a href="javascript:;" class="list-group-item tip">
                            <div class="list_group_img"><img src="../assets/images/order_bg_10.png"></div>
                            常见问题
                        </a>
                        <a href="javascript:;" class="list-group-item tip">
                            <div class="list_group_img"><img src="../assets/images/order_bg_9.png"></div>
                            意见反馈
                        </a>
                    </div>                   
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  methods:{
    logout(){
      axios({url:'/api/logout',method:'PUT'}).then(
        res=>{
          if(res.data.error==0){
            this.$store.commit('UPDATE_USER',{error:1});
            localStorage.removeItem('vue_user');
            this.$router.push('/home')
          }
        }
      )
    }
  }
  
}
</script>

<style scope>
</style>
