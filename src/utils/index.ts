const setMetaTitle = (title:any) =>{
    document.title = title;
    //有一些乱七八糟的webkit浏览器只有在页面刷新的时候才支持设置title 这个是很好的处理方法，面向搜索引擎编程
    // if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) {
        const iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        // 替换成站标favicon路径或者任意存在的较小的图片即可
        iframe.setAttribute('src', require("@assets/favicon.png"));
        const iframeCallback = () => {
            setTimeout(() => {
                iframe.removeEventListener('load', iframeCallback);
                document.body.removeChild(iframe);
            }, 0)
        }
        iframe.addEventListener('load', iframeCallback);
        document.body.appendChild(iframe);
    // }
}


export  {
    setMetaTitle
}