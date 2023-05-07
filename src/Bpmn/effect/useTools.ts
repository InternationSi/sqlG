/*
 * @Author: sfy
 * @Date: 2023-05-07 17:29:43
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 23:16:21
 * @FilePath: /sqlG/src/Bpmn/effect/useTools.ts
 * @Description: update here
 */

import { Graph } from '@antv/x6';
import { useGraphMount } from './useGraphMount';
import { clearTools } from '../utils';

interface useToolsPropsType {
  graph: Graph;
}

export const useTools = ({ graph }: useToolsPropsType) => {

  useGraphMount(graph, () => {
    graph.on('cell:click', ({ cell }) => {
      clearTools(graph);
      if (cell.isNode()) {
        cell.addTools({
          name: 'sam-button',
          args: {
            graph,
          },
        });
      }
    });
    graph.on('blank:click', ({ e }) => {
      clearTools(graph);
    });
  });
};
