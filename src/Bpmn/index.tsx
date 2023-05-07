/*
 * @Author: sfy
 * @Date: 2023-04-26 22:55:56
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 17:34:03
 * @FilePath: /sqlG/src/Bpmn/index.tsx
 * @Description: update here
 */

import React, { useEffect, type FC } from 'react';
import { useGraph } from './effect';
import { Cell } from '@antv/x6'
import { dataSource } from './data';
const Bpmn: FC<{ title: string }> = () => {

  
  const { graph, container } = useGraph()
  
  useEffect(() => {
        
    if(!graph) return
    const cells: Cell[] = []
    dataSource.forEach((item: any) => {
      if (item.shape === 'bpmn-edge') {
        cells.push(graph.createEdge(item))
      } else {
        cells.push(graph.createNode(item))
      }
    })
    graph.resetCells(cells)
  }, [graph])
  
  return <div ref={container} ></div>
};

export default Bpmn;
