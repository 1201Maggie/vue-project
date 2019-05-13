<template>
  <div>
    <div class="fanhui_cou">
			<div class="fanhui_1"></div>
			<div class="fanhui_ding">顶部</div>
		</div>
		<header class="header">
			<div class="fix_nav">
				<div class="nav_inner">
					<a class="nav-left back-icon" href="javascript:history.back();">返回</a>
					<div class="tit">产品列表</div>
				</div>
			</div>
		</header>

		<div class="container" id="container2">
			<div class="row">
				<ul class="mod-filter clearfix">
					<div class="white-bg_2 bb1">
					
					<li id="default" class="active"><a
						title="默认排序"  href="javascript:;">默认</a></li>
					<li id="buys"  ><a title="点击按销量从高到低排序"
						href="javascript:void(0);" >销量
						<i class='icon_sort'></i>
					</a></li>
					<li id="comments"  ><a title="点击按评论数从高到低排序"
						href="javascript:void(0);" >评论数 
						<i class='icon_sort'></i>
					</a></li>
					<li id="cash"  ><a title="点击按价格从高到低排序"
						href="javascript:;" >价格
						<i class='icon_sort'></i>
					</a></li>
					</div>
				</ul>
				
				<div class="item-list" id="container" rel="2" status="0"><input type="hidden" id="ListTotal" value="1">
					<router-link to="/list">
						<a href="javascript:;"  v-for="item in list" :key="item.id">
							<div class="hproduct clearfix" style="background:#fff;border-top:0px;">
								<div class="p-pic"><img style="max-height:100px;margin:auto;" class="img-responsive" :src="item.src"></div>
								<div class="p-info">
									<p class="p-title">{{item.title}}</p>
									<p class="p-origin"><em class="price">{{item.price1}}</em></p>
									<p class="mb0"><del class="old-price">{{item.price2}}</del></p>
								</div>
							</div>
						</a>
					</router-link>
				</div>
				
				<div id="ajax_loading" style="display:none;width:300px;margin: 10px  auto 15px;text-align:center;">
					<img src="../assets/images/loading.gif">
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
     data(){
     return {list:[]}
    },
  mounted(){
    axios({url:'/data/category_list.json'}).then(
      res=> this.list = res.data
	) 
  }
}
</script>