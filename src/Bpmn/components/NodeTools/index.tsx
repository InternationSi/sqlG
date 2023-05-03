/*
 * @Author: sfy
 * @Date: 2023-05-03 15:29:17
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-03 16:15:00
 * @FilePath: /sqlG/src/Bpmn/components/NodeTools/index.tsx
 * @Description: update here
 */

import React from 'react'
import EventsSvg from './EventsSvg'
import {createUseStyles} from 'react-jss'
import TaskSvg from './TaskSvg'

const useStyles = createUseStyles({
  'tool-box': {
    width: (props) => {
      return props.width + 20 + 'px'
    },
    height: (props) => {
      return props.height + 20+ 'px'
    },
    border: '1px solid',
    borderRadius: '5px'
  },
  'list': {
    marginLeft: (props) => {
      return props.width+ 10 + 'px'
    },
  }

})

export function NodeTools(props) {
  console.log('props: ', props);


  const classes = useStyles(props.rectangle)

  return (
    <>
    <div className={classes['tool-box']}>
    </div>
     <div className={classes['list']}><EventsSvg  /> <TaskSvg /></div>
     </>
  )
}
