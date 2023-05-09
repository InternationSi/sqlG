/*
 * @Author: sfy
 * @Date: 2023-05-07 17:29:43
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-09 22:31:09
 * @FilePath: /sqlG/src/Bpmn/effect/useTools.ts
 * @Description: update here
 */

import { Graph } from '@antv/x6';
import { clearTools, createTool } from '../utils';
import { useGraphMount } from './useGraphMount';

interface useToolsPropsType {
  graph: Graph;
}

export const useTools = ({ graph }: useToolsPropsType) => {
  useGraphMount(graph, () => {
    graph.on('cell:click', ({ cell }) => {
      clearTools(graph);
      if (cell.isNode()) {
        createTool(cell, graph);
      }
    });
    graph.on('blank:click', ({ e }) => {
      clearTools(graph);
    });
  });

};
