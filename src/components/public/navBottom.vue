<template>
  <div class="footer">
    <div class="fixBottomBox">
        <ul>
            <router-link tag="li" to="/home" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="i-home"></i>
                    <label>首页</label>
                </a>
            </router-link>
            <router-link tag="li" to="/product" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="i-product"></i>
                    <label>产品</label>
                </a>
            </router-link>
            <router-link tag="li" to="/agent" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="i-agent"></i>
                    <label>代理</label>
                </a>
            </router-link>
            <router-link tag="li" to="/cases" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="i-cases"></i>
                    <label>案例</label>
                </a>
            </router-link>
            <router-link tag="li" to="/about" class="tabItem">
                <a href="#" class="tab-item-link">
                    <i class="i-about"></i>
                    <label>我们</label>
                </a>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<style>
.tabItem.active .tab-item-link i,
.tabItem.active .tab-item-link label {
    color: #f60;
}
.tabItem.active .tab-item-link i{
    background-color: #f60;
}
</style>
