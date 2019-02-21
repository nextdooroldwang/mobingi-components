# 如何配置：
1.src/lang目录编写3个本地语言包（en,ja,zh）。
2.src/lang/index.js里组合element-ui和本地自定义的语言包，使用cookie里存的语言类型设置（没有设置默认为英文）和组合后的语言包实例化VueI18n。
3.main.js里注入VUE。
# 如何使用：
见src/views/i18n
