/*
 * @Author: sfy
 * @Date: 2023-05-03 15:29:17
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-10 21:29:40
 * @FilePath: /sqlG/src/Bpmn/components/NodeTools/index.tsx
 * @Description: update here
 */

import React from 'react';
import { createUseStyles } from 'react-jss';
import { clearTools } from '../../utils';
import EventsSvg from './EventsSvg';
import TaskSvg from './TaskSvg';
import { Graph, Rectangle } from '@antv/x6';

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

interface NodeToolsPropsType {
  graph: Graph
  rectangle: Rectangle
}

export const NodeTools: React.FC<NodeToolsPropsType> = (props) => {
  const { graph } = props;

  const classes = useStyles(props.rectangle as any);

  const eventClick = (type: string) => {
    console.log('type: ', type);
    
  }

  return (
    <div className={classes['tool-render']}>
      <div className={classes['tool-box']} />
      <div
        className={classes['list']}
        onClick={() => {
          clearTools(graph);
        }}
      >
        <span onClick={() => eventClick('event')}>
          <EventsSvg />
        </span>
        <span onClick={() => eventClick('event')}>
          <TaskSvg />
        </span>
      </div>
    </div>
  );
}
