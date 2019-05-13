<template>
    <div class="home">
        <header class="header">
            <div class="fix_nav">
                <div style="max-width:768px;margin:0 auto;height: 44px;position: relative;background:#000000;">
                    <form action="/m_search/list" method="get" id="searchform" name="searchform">
                        <div class="navbar-search left-search">
                            <input type="text" id="keyword" name="keyword" value="" placeholder="搜索商品" class="form-control">
                        </div>
                        <div class="nav-right">
                            <input type="button" value="搜索" onclick="searchproduct();" class="img-responsive" style="text-align:center;background:#ccc;border-radius: 5px;border:none;height:34px;vertical-align:middle;clear:both;padding:0px;width:42px;"/>
                        </div>
                    </form>
                </div>
            </div>
        </header>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../assets/img/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg" alt="女包" ppsrc="img/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg"></van-swipe-item>
            <van-swipe-item><img src="../assets/img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg" alt="女鞋" ppsrc="img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg"></van-swipe-item>
            <van-swipe-item><img src="../assets/img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg" alt="女鞋" ppsrc="img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg"></van-swipe-item>
        </van-swipe>

        <div class="container">
            <div class="row category">
                <a href="javascript:;" class="col-xs-3">
                    <img class="img-responsive" src="../assets/img/icon_rm.png">
                    <h4>热门</h4>
                </a>
                <a href="javascript:;" class="col-xs-3">
                    <img class="img-responsive" src="../assets/img/icon_tm.png">
                    <h4>精品</h4>
                </a>
                <a href="javascript:;" class="col-xs-3">
                    <img class="img-responsive" src="../assets/img/theme.png">
                    <h4>专题列表</h4>
                </a>
                <a href="javascript:;" class="col-xs-3">
                    <img class="img-responsive" src="../assets/img/icon_pp.png">
                    <h4>品牌</h4>
                </a>
            </div>
            
            <div class="row">
                <!--产品块-->
                <div class="tb_box">
                    <h2 class="tab_tit">礼品箱包
                        <router-link to="/detail">
                        <a class="more" href="javascript:;">更多</a></router-link>
                    </h2>
                    
                    <div class="tb_type tb_type_even clearfix">
                        <router-link to="/detail">
                             <a class="tb_floor" href="javascript:;" v-for="(item,index) of list" :key="index">
                                    <img :src="item.src" style="width:100%;">
                            </a>
                        </router-link>
                    </div>
                </div>
                <!--产品块-->
                <div class="tb_box">
                    <h2 class="tab_tit">服饰鞋帽
                        <router-link to="/detail">
                        <a class="more" href="javascript:;">更多</a></router-link>
                    </h2>
                    <div class="tb_type clearfix">
                        <a class="tb_floor" href="javascript:;" v-for="(item,index) in a" :key="index">
                            <img :src="item.src" style="width:100%;">
                        </a>
                    </div>
                </div>
                <!-- 产品块 -->
                <div class="tb_box">
                    <h2 class="tab_tit">数码办公
                        <a class="more" href="javascript:;">更多</a>
                    </h2>
                    <div class="tb_type tb_type_even clearfix">
                        <a class="tb_floor" href="javascript:;" v-for="(item,index) in b" :key="index">
                            <img :src="item.src" style="width:100%;">
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 data(){
     return {
         list:[],
         a:[],
         b:[],
    }
 },
  mounted(){
   this.request({
       arr:"list",
       type:"src",
       index:"0" 
   });
   this.request({
       arr:"a",
       type:"src",
       index:"1" 
   });
   this.request({
       arr:"b",
       type:"src",
       index:"2" 
   });
  } ,
methods: {
    request(options){
            let url = options.url
            let arr = options.arr
            let type = options.type
            let index = options.index
            url = url ? url : '/data/index1.json'; //url做默认处理
            axios({
                url:url
            }).then(res => {
                if(res.status){
                    let str = JSON.stringify(res.data[index]);
                    let sArr = eval('('+ str +')')
                    // console.log(sArr);
                    for(let i=0;i<sArr.length;i++){
                        this[arr].push({
                            id:sArr[i].id,
                            value:sArr[i][type],
                            src:sArr[i].src
                        })
                    }
                }
            })
        }
}
}
</script>

<style scope>
   .left-search {
    padding-right: 0;
    left: 5px;
    right: 55px;
}
.navbar-search {
    height: 100%;
    top: 0;
    position: absolute;
    width: auto !important;
}
.left-search .form-control {
    background: #fff url(../assets/images/search.jpg) no-repeat 5px center;
    background-size: 25px;
    padding-left: 30px;
    margin-top: 5px;
}
.form-control {
    display: block;
    width: 85%;
    padding: 6px 12px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.nav-left, .nav-right {
    width: 42px;
    height: 34px;
    position: absolute;
    top: 5px;
    display: block;
    overflow: hidden;
    border-radius: 5px;
}
.nav-right {
    right: 5px;
    text-align: center;
}

</style>