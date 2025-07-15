import {expect, test} from '@playwright/test';

test('deve exibir alert ao clicar no botão Inscrever-se', async ({page}) => {
  // Acesse a rota
  await page.goto('http://localhost:6006/?path=/story/views-table-tableview--default');

  // Acesse o iframe do preview
  const frame = await page.frameLocator('#storybook-preview-iframe');

  // Intercepta o alert
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Inscrito!');
    await dialog.dismiss(); // ou dialog.accept();
  });

  // Aguarde o botão no iframe e clique
  const subscribeButton = frame.getByRole('button', {name: /Inscrever-se/i});
  await expect(subscribeButton).toBeVisible();
  await subscribeButton.click();
});