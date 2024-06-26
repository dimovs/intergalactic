import React from 'react';
import Link from 'intergalactic/link';
import CheckM from 'intergalactic/icon/Check/m';
import ChevronRightM from 'intergalactic/icon/ChevronRight/m';
import FormatText from 'intergalactic/format-text';

const Demo = () => {
  return (
    <FormatText size={'l'}>
      <Link ml={4} href='#' size={300}>
        <Link.Addon>
          <CheckM />
        </Link.Addon>
        <Link.Text>Link</Link.Text>
        <Link.Addon>
          <ChevronRightM />
        </Link.Addon>
      </Link>
    </FormatText>
  );
};

export default Demo;
