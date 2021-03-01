const automator = require('miniprogram-automator')
let miniProgram
let page

beforeAll(async () => {
  miniProgram = await automator.launch({
    // projectPath: '/Users/apple/gdmecprj/wxxcx/TypingShow'
    projectPath:process.env.WORKSPACE
  })
  await miniProgram.remote({auto:true})
}, 60000)

describe('1.获取openid', () => {
  beforeAll(async () => {
    page = await miniProgram.reLaunch('/pages/deployFunctions/deployFunctions')
    await page.waitFor(500)
    // await miniProgram.screenshot({
    //   path: 'page1.png'
    // })
  }, 60000)
  test('1.1 调用失败', async () => {
    const desc = await page.$('.black')
    expect(desc.tagName).toBe('text')
    expect(await desc.text()).toContain('调用失败')
  }, 3000)
  it('1.2 list', async () => {
    const item = await page.$('.headline')
    expect(item.tagName).toBe('text')
    expect(await item.text()).toContain('云函数')
  })
})

describe('2.即时通讯demo',()=>{
  beforeAll(async ()=>{
    page = await miniProgram.reLaunch('/pages/im/im')
    await page.waitFor(500)
    // await miniProgram.screenshot({
    //   path: 'page2.png'
    // })
  },60000)

  test('2.1 ',async ()=>{
    const item = await page.$('.headline')
    expect(item.tagName).toBe('text')
    expect(await item.text()).toContain('即时通信 demo 介绍')
  })

  test('2.2 ',async ()=>{
    const item = await page.$('.uploader')
    expect(item.tagName).toBe('view')
  })  
})

afterAll(async () => {
  await miniProgram.close()
  tt = new Date()
})