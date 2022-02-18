let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 5000);
});

test("The page title Yandex", async () => {
  await page.goto("https://yandex.ru/");
  const main = await page.title();
  expect(main).toEqual('Яндекс');
}, 5000);

test("The page title Mail", async () => {
  await page.goto("https://mail.ru/");
  const main2 = await page.title();
  expect(main2).toEqual('Mail.ru: почта, поиск в интернете, новости, игры');
}, 5000);

test("The page title Netology/blog", async () => {
  await page.goto("https://netology.ru/blog");
  const main3 = await page.title();
  expect(main3).toEqual('Медиа Нетологии: об образовании в диджитале');
}, 5000);