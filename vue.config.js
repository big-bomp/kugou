//webpack 配置文件
module.exprots={
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.kugou.com",//当访问http://localhost.8080/
                secure:false,//用得是http协议  true是https协议
                changeOrigin:true,//允许跨域
                pathRewrite:{
                    "^/api":''
                }

            }
        }
    } 
}