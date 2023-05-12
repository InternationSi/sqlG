/*
 * @Author: sfy
 * @Date: 2023-04-26 22:55:56
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-12 23:24:15
 * @FilePath: /sqlG/src/Bpmn/index.tsx
 * @Description: update here
 */

import React, { useEffect, type FC } from 'react';
import { useGraph } from './effect';
import { Cell } from '@antv/x6'
import { GraphContext } from './utils';
import { BpmnType } from './type';


const Bpmn: FC<BpmnType> = (props) => {
  const { data } = props
  console.log('data: ', data);
  
  const { graph, container } = useGraph()
  
  useEffect(() => {
    if(!graph) return
    const cells: Cell[] = []
    data.edges?.forEach(edge => {
      cells.push(graph.createEdge(edge))
    })
    data.nodes?.forEach(node => {
      cells.push(graph.createNode(node))
    })
    graph.resetCells(cells)
  }, [graph, data])
  
  return (
    <GraphContext.Provider value={{ graph }}>
      <div ref={container} ></div>
    </GraphContext.Provider>
    )
  
};

export default Bpmn;
