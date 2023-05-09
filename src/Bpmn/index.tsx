/*
 * @Author: sfy
 * @Date: 2023-04-26 22:55:56
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-09 22:54:28
 * @FilePath: /sqlG/src/Bpmn/index.tsx
 * @Description: update here
 */

import React, { useEffect, type FC } from 'react';
import { useGraph } from './effect';
import { Cell } from '@antv/x6'
import { dataSource } from './data';
import { GraphContext } from './utils';
import { BpmnType } from './type';


const Bpmn: FC<BpmnType> = (props) => {
  const { data } = props
  
  const { graph, container } = useGraph()
  
  useEffect(() => {
    if(!graph) return
    const cells: Cell[] = []
    dataSource.edges.forEach(edge => {
      cells.push(graph.createEdge(edge))
    })
    dataSource.nodes.forEach(node => {
      cells.push(graph.createNode(node))
    })
    graph.resetCells(cells)
  }, [graph])
  
  return (
    <GraphContext.Provider value={{ graph }}>
      <div ref={container} ></div>
    </GraphContext.Provider>
    )
  
};

export default Bpmn;
