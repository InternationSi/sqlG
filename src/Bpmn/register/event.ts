/*
 * @Author: sfy
 * @Date: 2023-04-30 23:52:04
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-02 16:18:04
 * @FilePath: /sqlG/src/Bpmn/register/event.ts
 * @Description: update here
 */

import {  Graph,  } from '@antv/x6'

export const registerEventNode = () => {
  Graph.registerNode(
    'event',
    {
      width: 40,
      height: 40,
      inherit: 'circle',
      attrs: {
        body: {
          strokeWidth: 2,
          stroke: '#000',
          fill: '#FFF',
        },
      },
    },
    true,
  )
}
