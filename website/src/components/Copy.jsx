import React from 'react';
import Tooltip from '@semcore/tooltip';
import styles from './Copy.module.css';
import cx from 'classnames';

const Copy = (props) => {
  const [view, setView] = React.useState(undefined);
  const handleClick = React.useCallback(async () => {
    const toCopy = typeof props.toCopy === 'function' ? props.toCopy() : props.toCopy;
    await navigator.clipboard.writeText(toCopy);

    setView(props.copiedToast ?? 'Copied! You are awesome!');
  }, [props.copiedToast, props.toCopy, props.onClick]);
  React.useEffect(() => {
    if (!view) return;
    const timeout = setTimeout(() => {
      if (!view) return;
      setView(undefined);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [view, props.toCopy]);

  return (
    <Tooltip
      {...props}
      className={cx(props.className, styles.tooltipStyle)}
      title={view ?? props.title ?? 'Click to copy'}
      aria-label='Click to copy'
      {...{
        selfProps: {
          popupTransitionName: 'popup-fade',
        },
      }}
    >
      {React.cloneElement(props.children, {
        onClick: handleClick,
      })}
    </Tooltip>
  );
};

export default Copy;
