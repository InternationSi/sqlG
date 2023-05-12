/*
 * @Author: sfy
 * @Date: 2023-05-12 17:21:18
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-12 23:32:49
 * @FilePath: /sqlG/src/ER/index.tsx
 * @Description: update here
 */

import React from 'react'
import { useGraph } from './effect'
import { GraphContext } from './utils';

function ER() {

  const { graph, container } = useGraph()
  console.log('graph: ', graph);

  return (
    <GraphContext.Provider value={{ graph }}>
      <div ref={container} ></div>
    </GraphContext.Provider>
    )
}

export default ER