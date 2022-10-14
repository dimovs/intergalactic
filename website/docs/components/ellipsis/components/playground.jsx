import React from 'react';
import Ellipsis from '@semcore/ellipsis';
import { Box } from '@semcore/flex-box';
import PlaygroundGeneration from '@components/PlaygroundGeneration';

export default PlaygroundGeneration((preview) => {
  const { bool, radio, text } = preview('Dropdown');

  const trim = radio({
    key: 'trim',
    defaultValue: 'end',
    label: 'Trimming type',
    options: ['end', 'middle'],
  });

  const tooltip = bool({
    key: 'tooltip',
    defaultValue: true,
    label: 'Show tooltip',
  });

  const maxLine = text({
    key: 'maxLine',
    defaultValue: 1,
    label: 'Rows count in multiline mode',
  });

  return (
    <Box w={400}>
      <Ellipsis trim={trim} tooltip={tooltip} maxLine={maxLine}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi hic nemo tenetur
        voluptatem! A aliquid assumenda dolore ducimus impedit numquam ratione recusandae sed ullam
        voluptate? Aperiam distinctio minus possimus quasi.
      </Ellipsis>
    </Box>
  );
});