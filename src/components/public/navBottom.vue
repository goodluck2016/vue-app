<template>
  <div class="footer">
    <div class="fixBottomBox">
        <ul>
            <router-link tag="li" to="/home" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="iconfont">&#xe60d;</i>
                    <label>首页</label>
                </a>
            </router-link>
            <router-link tag="li" to="/category" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="iconfont">&#xe60c;</i>
                    <label>分类</label>
                </a>
            </router-link>
            <router-link tag="li" to="/agent" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="iconfont">&#xe657;</i>
                    <label>代理</label>
                </a>
            </router-link>
            <router-link tag="li" to="/cases" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="iconfont">&#xe610;</i>
                    <label>案例</label>
                </a>
            </router-link>
            <router-link tag="li" to="/about" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="iconfont">&#xe65c;</i>
                    <label>我们</label>
                </a>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<style>
.fixBottomBox {
    width: 100%;
    height: 50px;
    box-shadow: 0 -2px 10px #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
}
.fixBottomBox ul {
    display: flex;
    justify-content: space-around;
}
.fixBottomBox .tabItem {
    flex: 1;
    height: 100%;
    text-align: center;
}
.tabItem .tab-item-link {
    display: block;
    height: 50px;
}
.tabItem .tab-item-link i{
    display: block;
    height: 20px;
    width: 20px;
    margin: 5px auto 3px;
    font-size: 20px;
}
.tabItem .tab-item-link label{
    display: block;
    height: 20px;
    font-size: 14px;
    text-align: center;
}
.tabItem .tab-item-link .tab-item-icon {
    width: 100%;
    height: auto;
}
.tabItem.active .tab-item-link i,
.tabItem.active .tab-item-link label {
    color: #f60;
}
</style>
