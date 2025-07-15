import {expect, test} from '@playwright/test';

test('Deve exibit alert ao clicar no botão voltar', async ({page}) => {
  await page.goto('http://localhost:6006/?path=/story/views-table-session-sessionview--sessao-1');

  const frame = await page.frameLocator('#storybook-preview-iframe');

  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Voltando...')
    await dialog.dismiss();
  });

  const backButton = frame.getByRole('button', {name: /Voltar/i});
  await expect(backButton).toBeVisible();
  await backButton.click();
});