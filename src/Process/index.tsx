/*
 * @Author: sfy
 * @Date: 2023-05-12 17:21:18
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-12 23:29:30
 * @FilePath: /sqlG/src/Process/index.tsx
 * @Description: update here
 */

import React from 'react'
import { useGraph } from './effect'
import { GraphContext } from './utils';

function Process() {

  const { graph, container } = useGraph()
  console.log('graph: ', graph);

  return (
    <GraphContext.Provider value={{ graph }}>
      <div ref={container} ></div>
    </GraphContext.Provider>
    )
}

export default Process