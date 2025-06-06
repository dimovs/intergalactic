import React from 'react';
import Wizard from '@semcore/wizard';
import Button from '@semcore/button';
import { Flex } from '@semcore/flex-box';
import { Text } from '@semcore/typography';

const steps = [{ title: 'Location' }, { title: 'Keywords' }, { title: 'Schedule' }];

type WizardStep = { title: string };

const Demo = () => {
  const [step, setStep] = React.useState<number>(1);
  const [visible, setVisible] = React.useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <>
      <Button onClick={handleOpen}>Open wizard</Button>
      <Wizard visible={visible} step={step} w={600} onClose={handleClose}>
        <Wizard.Sidebar title='Site Audit Settings'>
          <Wizard.Stepper step={1} onActive={() => setStep(1)} completed>
            {steps[0].title}
          </Wizard.Stepper>
          <Wizard.Stepper step={2} onActive={() => setStep(2)}>
            {steps[1].title}
          </Wizard.Stepper>
          <Wizard.Stepper step={3} onActive={() => setStep(3)}>
            {steps[2].title}
          </Wizard.Stepper>
        </Wizard.Sidebar>
        <Wizard.Content tag={Flex} direction='column' justifyContent='space-between'>
          <Wizard.Step step={1}>
            <Text size={500} tag={'h3'}>
              {steps[0].title}
            </Text>
          </Wizard.Step>
          <Wizard.Step step={2}>
            <Text size={500} tag={'h3'}>
              {steps[1].title}
            </Text>
          </Wizard.Step>
          <Wizard.Step step={3}>
            <Text size={500} tag={'h3'}>
              {steps[2].title}
            </Text>
          </Wizard.Step>
          <Flex mt={5}>
            {step > 1 && (
              <Wizard.StepBack
                onActive={() => setStep(step - 1)}
                stepName={steps[step - 2].title}
              />
            )}
            {step !== steps.length && (
              <Wizard.StepNext
                ml={'auto'}
                onActive={() => setStep(step + 1)}
                stepName={steps[step].title}
              />
            )}
          </Flex>
        </Wizard.Content>
      </Wizard>
    </>
  );
};

export default Demo;
