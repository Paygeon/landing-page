import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Products.module.scss';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  openModal: () => void;
}

export const Products: FC<Props> = memo(function Products({ openModal }) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.iMAGE}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.upgrade}>Upgrade</div>
      <div className={classes.billPaymint}>Bill Paymint</div>
      <div className={classes.unnamed}>0</div>
      <div className={classes.freePlan}>Free Plan</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.r1}></div>
      <div className={classes.iMAGE2} onClick={openModal}></div>
      <div className={classes.rectangle6} onClick={openModal}></div>
      {/* Attach onClick to the div containing "Funding Widget" */}
      <div className={classes.fundingWidget} onClick={openModal}>Funding Widget</div>
      <div className={classes.unnamed2} onClick={openModal}>0</div>
      <div className={classes.freePlan2}>Free Plan</div>
      <div className={classes.imageedit_73_77701851401}></div>
      <div className={classes.products}>Products</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.upgrade2}>Upgrade</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.iMAGE3}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.upgrade3}>Upgrade</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.creditCardMarketplace}>Credit Card Marketplace</div>
      <div className={classes.unnamed3}>0</div>
      <div className={classes.freePlan3}>Free Plan</div>
      <div className={classes._6389fd6b969b1b55229797b2_Untit}></div>
    </div>
  );
});
