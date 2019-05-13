<template>
    <div class="detail">
        <header class="header">
            <div class="fix_nav">
                <div class="nav_inner">
                    <a class="nav-left back-icon" href="javascript:history.go(-1);">返回</a>
                    <div class="tit">分类</div>
                    <div class="sousuo" id="sousou"><img src="../assets/images/sou.png"></div>
                </div>
            </div>
        </header>
        <div style="overflow: hidden;position: fixed;width: 100%;z-index: 10000;top:0px;">
            <div class="order_top_count" style="display:none;">
                <div class="order_top">
                    <div class="order_a_l">
                        <div id="nav-left_ll"><img src="../assets/images/order_top_l.png"></div>
                    </div>
                    <div class="order_sou">
                        <form action="/m_search/list" method="get" id="searchform" name="searchform">
                            <input name="keyword" id="keyword" placeholder="搜索商品" type="text" value="">
                            <span class="pro_sou" style="cursor: pointer;" onclick="searchproduct();"><img src="../assets/images/Search.png"></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row" id="row_5">
                <div class="sort-arat" style="margin-top: 10px;">
                    <ul>
                        <li  v-for="(item,index) in list" :key="index">
                            <a href="javascript:;">
                            <img alt="图片大小为100*100" style="width:initial;height:100px;" :src="item.src" >
                            <div style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;">{{item.title}}</div>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="mt10 white-bg">
                    <router-link to="/category_list"><h4 class="sort-tit">品牌分类</h4></router-link>
                    <div class="sort-arat brand-areat">
                        <ul>
                            <li v-for="(item,index) in a" :key="index">
                                <a href="javascript:;">
                                    <img alt="图片大小为200*105" :src="item.src" style="height: 39px;" />
                                </a>
                            </li>
                        </ul>
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
  } ,
methods: {
    request(options){
            let url = options.url
            let arr = options.arr
            let type = options.type
            let index = options.index
            url = url ? url : '/data/detail.json'; //url做默认处理
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
                            src:sArr[i].src,
                            title:sArr[i].title
                        })
                    }
                }
            })
        }
    }
}
</script>

<style scope>

</style>
