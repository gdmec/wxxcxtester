const automator = require('miniprogram-automator')
let projectPath = process.argv[2]
automator.launch({
  // cliPath: 'path/to/cli', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  projectPath, // 项目文件地址
}).then(async miniProgram => {
  // const page = await miniProgram.navigateTo('/pages/deployFunctions/deployFunctions')
  // await page.waitFor(500)
  let pages = await miniProgram.pageStack()
  console.log(pages.length)
  let page = pages[0]
  console.log(page.path)
  const elements = await page.$('.userinfo-nickname')
  // console.log(elements)
  // // console.log("item(0):",elements.item(0))  // TypeError: elements.item is not a function
  // console.log("[0]:",elements)
  // console.log(await elements.attribute('class'))
  console.log(await elements.text())
  await elements.tap()
  await miniProgram.screenshot({
    path: 'screenshot.png'
  })
  // page = await miniProgram.currentPage()
  pages = await miniProgram.pageStack()
  await miniProgram.screenshot({
    path: 'screenshot1.png'
  })
  console.log(pages.length)
  page = pages[pages.length-1]
  console.log(page.path)
  const e1 = await page.$('.black')
  console.log(await e1.text())
  await miniProgram.close()
})

