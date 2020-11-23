module.exports = {
  // 需要打包项目是才使用 ./ ，打包后请将 ./ 改为 / ， 否则开发项目时开发服务器会报错
	publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  //放置静态资源目录
  // assetsDir: "static",
}