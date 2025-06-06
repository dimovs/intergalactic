import React from 'react';
import Pills from '@semcore/pills';
import { Text } from '@semcore/typography';

const Demo = () => (
  <Pills defaultValue='all' aria-label='Pills with counters'>
    <Pills.Item value='all'>
      <Pills.Item.Text>All</Pills.Item.Text>
      <Pills.Item.Addon>
        <Text color='text-secondary'>1,259</Text>
      </Pills.Item.Addon>
    </Pills.Item>
    <Pills.Item value='follow'>
      <Pills.Item.Text>Follow</Pills.Item.Text>
      <Pills.Item.Addon>
        <Text color='text-secondary'>557</Text>
      </Pills.Item.Addon>
    </Pills.Item>
    <Pills.Item value='nofollow'>
      <Pills.Item.Text>Nofollow</Pills.Item.Text>
      <Pills.Item.Addon>
        <Text color='text-secondary'>736</Text>
      </Pills.Item.Addon>
    </Pills.Item>
  </Pills>
);

export default Demo;
