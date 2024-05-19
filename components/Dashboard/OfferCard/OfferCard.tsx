import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { ArrowButtonArrow_ButtonArrowRi } from '../ArrowButtonArrow_ButtonArrowRi/ArrowButtonArrow_ButtonArrowRi';
import { _500Neopop1Icon } from './_500Neopop1Icon';
import classes from './OfferCard.module.scss';
import { SubtractIcon } from './SubtractIcon';
import { TopSectionIcon } from './TopSectionIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    topSection?: ReactNode;
    subtract?: ReactNode;
    _500Neopop1?: ReactNode;
  };
}
/* @figmaId 78:673 */
export const OfferCard: FC<Props> = memo(function OfferCard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bottomSection}></div>
      <div className={classes.sorryThisProgramIsNotAvailable}>
        Sorry, this program is not available right now. Indicate your interest to be notified when the next cohort is
        live.
      </div>
      <button className={classes.buttonMain}>
        <div className={classes.label}>Notify Me</div>
        <ArrowButtonArrow_ButtonArrowRi className={classes.arrowButtonArrow} />
      </button>
      <div className={classes.topSection}>{props.swap?.topSection || <TopSectionIcon className={classes.icon} />}</div>
      <div className={classes.subtract}>{props.swap?.subtract || <SubtractIcon className={classes.icon2} />}</div>
      <div className={classes.content}>
        <div className={classes.frame28}>
          <div className={classes.applyForCapital}>Apply for capital</div>
          <div className={classes.smallDollarLoansGrantsAndInves}>Small dollar loans, grants and investments</div>
        </div>
      </div>
      <div className={classes._500Neopop1}>
        {props.swap?._500Neopop1 || <_500Neopop1Icon className={classes.icon3} />}
      </div>
    </div>
  );
});
