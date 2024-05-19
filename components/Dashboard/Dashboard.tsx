"use client"
import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { _500Neopop1Icon } from './_500Neopop1Icon';
import classes from './Dashboard.module.scss';
import { OfferCard } from './OfferCard/OfferCard';
import { Products } from './Products/Products';
import { RectangleIcon } from './RectangleIcon';
import { SubtractIcon } from './SubtractIcon';
import { TheGoodStuffFull } from './TheGoodStuffFull/TheGoodStuffFull';
import { TopSectionIcon } from './TopSectionIcon';
import { FundingWidget } from '@/components/FundingWidget/FundingWidget';

interface Props {
  className?: string;
}

export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleVideoEnded = () => {
    const video = document.getElementById("videoBanner") as HTMLVideoElement | null;
    if (video) {
      video.pause();
    }
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <video autoPlay muted id="videoBanner" className={classes.videoBanner} onEnded={handleVideoEnded}>
        <source src="https://vashong.github.io/widgets/images/home-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={classes.rectangle2}></div>
      <div className={classes.iMAGE}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.iMAGE2}></div>
      <div className={classes.iMAGE3}></div>
      <div className={classes.goodEvening}>Good Evening,</div>
      <div className={classes.vashonGonzales}>Vashon Gonzales</div>
      <Products openModal={openModal} />
      <OfferCard
        className={classes.offerCard}
        swap={{
          topSection: <TopSectionIcon className={classes.icon} />,
          subtract: <SubtractIcon className={classes.icon2} />,
          _500Neopop1: <_500Neopop1Icon className={classes.icon3} />,
        }}
      />
      <TheGoodStuffFull />

      {isModalOpen && (
        <div className={classes.modalOverlay} onClick={closeModal}>
          <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={classes.closeButton} onClick={closeModal}>X</button>
            <FundingWidget closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
});
