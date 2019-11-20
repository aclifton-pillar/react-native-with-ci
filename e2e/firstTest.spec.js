describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('doesn\'t show the time at first', async () => {
    await expect(element(by.id('time'))).toBeNotVisible();
  });

  it('has a button you can tap to show the time', async () => {
    const button = element(by.id('getTime'));
    await button.tap();
  });
});
