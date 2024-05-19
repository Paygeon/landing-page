import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './ArrowButtonArrow_ButtonArrowRi.module.scss';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 7:217 */
export const ArrowButtonArrow_ButtonArrowRi: FC<Props> = memo(function ArrowButtonArrow_ButtonArrowRi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
