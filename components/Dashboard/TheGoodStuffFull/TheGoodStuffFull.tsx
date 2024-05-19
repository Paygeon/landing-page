import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import { Cash11Icon } from './Cash11Icon';
import { Frame3Icon } from './Frame3Icon';
import { Frame31Icon } from './Frame31Icon';
import { Frame32Icon } from './Frame32Icon';
import { ReactIconsBsdiscordIcon } from './ReactIconsBsdiscordIcon';
import classes from './TheGoodStuffFull.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 126:598 */
export const TheGoodStuffFull: FC<Props> = memo(function TheGoodStuffFull(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.theGoodStuff}>The Good Stuff</div>
      <div className={classes.viewAll}>View All</div>
      <div className={classes.cash11}>
        <Cash11Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.frame31}>
        <div className={classes.frame3}>
          <div className={classes.frame312}>
            <Frame31Icon className={classes.icon2} />
          </div>
        </div>
      </div>
      <a href="https://github.com/orgs/Paygeon/repositories" className={classes.link} target="_blank" rel="noopener noreferrer">
        <div className={classes.contributeTheCode}>Contribute the Code</div>
        <div className={classes.contribute}>Contribute →</div>
      </a>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.frame313}>
        <div className={classes.frame32}>
          <div className={classes.frame322}>
            <Frame32Icon className={classes.icon3} />
          </div>
        </div>
      </div>
      <a href="https://blog.paygeon.com/" className={classes.link} target="_blank" rel="noopener noreferrer">
      <div className={classes.readTheDocumentation}>Read the Documentation</div>
      <div className={classes.read}>Read →</div>
      </a>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.frame314}>
        <div className={classes.reactIconsBsDiscord}>
          <ReactIconsBsdiscordIcon className={classes.icon4} />
        </div>
      </div>
      <a href="https://discord.gg/Q2ACsXUDYF" className={classes.link} target="_blank" rel="noopener noreferrer">
      <div className={classes.joinTheCommunity}>Join the Community</div>
      <div className={classes.join}>Join →</div>
      </a>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.frame315}>
        <div className={classes.frame33}>
          <Frame3Icon className={classes.icon5} />
        </div>
      </div>
      <div className={classes.giveTheFeedback}>Give the Feedback</div>
      <div className={classes.give}>Give →</div>
    </div>
  );
});
