<template>
<div class="buyCar">
    <footer></footer>
    <div class="fanhui_cou">
        <div class="fanhui_1"></div>
        <div class="fanhui_ding">顶部</div>
    </div> 
    <header class="header header_1">
        <div class="fix_nav">
            <div class="nav_inner">
                <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
                <div class="tit">购物车</div>
            </div>
        </div>
    </header>

    <van-swipe-cell :right-width="65" :on-close="onClose">
        <van-cell-group>
             <div class="container ">
                <div class="row rowcar">
                    <ul class="list-group"  v-for="item in list" :key="item.id">
                        <li class="list-group-item text-primary" >{{item.title1}}
                            <div class="icheck pull-left mr5">
                                <input type="checkbox" checked="checked" class="ids" prodStatus="1"  itemkey=""/>
                                    <label class="checkLabel"><span></span></label>
                            </div>
                        </li>
                        
                        <li class="list-group-item hproduct clearfix">
                            <div class="p-pic"><a href="javascript:;"><img class="img-responsive" :src="item.src"></a></div>
                            <router-link to="/list">
                                <div class="p-info">
                                    <a href="javascript:;"><p class="p-title">{{item.title}}</p></a>
                                    <p class="p-attr"><span>颜色：红色；</span></p>
                                    <p class="p-origin">
                                        <em class="price">{{item.price}}</em>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li class="list-group-item clearfix">
                            <div class="pull-left mt5">
                                <span class="gary">小计：</span>
                                <em class="red productTotalPrice">¥179.00</em>
                            </div>
                            <van-stepper v-model="value"  class="btn-group btn-group-sm control-num"/>
                        </li>
                    </ul>
                </div>
            </div> 
        </van-cell-group>
        <span slot="right"><van-button type="danger">删除</van-button></span>
    </van-swipe-cell>
    

    <div class="fixed-foot">
        <div class="fixed_inner">
            <div class="pay-point">
                <div class="icheck pull-left mr10">
                    <input type="checkbox" checked="checked" id="buy-sele-all" value="1">
                    <label for="buy-sele-all"><span class="mt10"></span>全选</label>
                </div>
                <p>合计：<em class="red f22">¥179.00<span id="totalPrice"></span></em></p>
            </div>
            <div class="buy-btn-fix">
                <a href="javascript:;" class="btn btn-danger btn-buy">去结算</a>
            </div>
        </div>
    </div>
    <div class="clear"></div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      value: 1,
      list:[]
    }
  },
//    

  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  },
  mounted () {
      axios({url:'/data/buyCar.json'}).then(
      res=> this.list = res.data
	) 
  }
}
</script>

<style scoped>
.fanhui_cou{position: fixed;bottom:60px;right:10px;z-index: 10000;opacity:0.8;background:#fff;width:52px;height:52px;border-radius: 50%;text-align: center;color:#909ca9;border:1px solid #8f9caa;display:none;}
.fanhui_1{background:url(../assets/images/bot_top_arrow.png) no-repeat;width:14px;height:14px;background-size:14px;font-size: 12px;text-align: center;margin: 10px auto 0;}
.fanhui_ding{padding-top: 2px;}

.fix_nav {height: 44px;line-height: 44px;position: fixed;top: 0;left: 0;width: 100%;z-index: 99;}

.van-button--normal {
    padding: 0 15px;
    position: relative;
    top: 30%;
}
.van-button--danger {
    color: #fff;
    background-color: #f44;
    border: 1px solid #f44;
}
</style>
