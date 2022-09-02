import { expect } from '@playwright/test';
import { voTest as test } from '@guidepup/playwright';
import { e2eStandToHtml } from '@semcore/jest-preset-ui/e2e-stand';
import { resolve as resolvePath } from 'path';
import { writeFile } from 'fs/promises';
import { getReportHeader, makeVoiceOverReporter } from '@semcore/jest-preset-ui/vo-reporter';

test('Users can interact with Slider via VoiceOver', async ({ page, voiceOver: pureVoiceOver }) => {
  const standPath = resolvePath(
    __dirname,
    '../../../website/docs/components/slider/examples/slider.jsx',
  );
  const reportPath = resolvePath(
    __dirname,
    '../../../website/docs/components/slider/slider-a11y-report.md',
  );
  const htmlContent = await e2eStandToHtml(standPath, 'en');

  await page.setContent(htmlContent);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const { voiceOver, getReport } = await makeVoiceOverReporter(pureVoiceOver);
  await voiceOver.interact();

  expect(await voiceOver.itemText()).toBe('2 slider');
  await voiceOver.interact();
  expect(await voiceOver.lastSpokenPhrase()).toBe('In slider');
  await voiceOver.press('Control+Option+ArrowLeft');
  expect(await voiceOver.itemText()).toBe('1 slider');
  await voiceOver.press('Control+Option+ArrowRight');
  await voiceOver.press('Control+Option+ArrowRight');
  expect(await voiceOver.itemText()).toBe('3 slider');
  await voiceOver.stopInteracting();
  expect(await voiceOver.itemText()).toBe('3 slider');
  expect(await voiceOver.lastSpokenPhrase()).toBe('Out of slider');

  const report = (await getReportHeader()) + '\n\n' + (await getReport(standPath));

  await writeFile(reportPath, report);
});