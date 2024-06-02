// 当页面加载完毕时执行
window.onload = function() {
    // 获取返回顶部按钮和文档的高度
    var backToTopButton = document.getElementById('backToTopButton');
    var scrollHeight = document.documentElement.scrollHeight;

    // 监听页面的滚动事件
    window.onscroll = function() {
        // 当页面向下滚动超过页面高度时显示按钮
        if (window.pageYOffset > document.documentElement.clientHeight) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // 点击按钮时，平滑滚动到页面顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' // 平滑滚动
        });
    });
};