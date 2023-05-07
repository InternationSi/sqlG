/*
 * @Author: sfy
 * @Date: 2023-05-03 15:29:17
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 23:19:40
 * @FilePath: /sqlG/src/Bpmn/components/NodeTools/index.tsx
 * @Description: update here
 */

import React from 'react';
import { createUseStyles } from 'react-jss';
import { clearTools } from '../../utils';
import EventsSvg from './EventsSvg';
import TaskSvg from './TaskSvg';

const useStyles = createUseStyles({
  'tool-box': {
    width: (props) => {
      return props.width + 20 + 'px';
    },
    height: (props) => {
      return props.height + 20 + 'px';
    },
    border: '1px solid',
    borderRadius: '5px',
  },
  list: {
    // marginLeft: (props) => {
    //   return props.width+ 20 + 'px'
    // },
  },
  'tool-render': {
    display: 'flex',
  },
});

export function NodeTools(props) {
  const { graph } = props;

  const classes = useStyles(props.rectangle);

  return (
    <div className={classes['tool-render']}>
      <div className={classes['tool-box']} />
      <div
        className={classes['list']}
        onClick={() => {
          clearTools(graph);
        }}
      >
        <span>
          <EventsSvg />{' '}
        </span>
        <span>
          <TaskSvg />
        </span>
      </div>
    </div>
  );
}
