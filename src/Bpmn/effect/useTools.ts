/*
 * @Author: sfy
 * @Date: 2023-05-07 17:29:43
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 17:38:29
 * @FilePath: /sqlG/src/Bpmn/effect/useTools.ts
 * @Description: update here
 */

import { Graph } from '@antv/x6';
import { useCallback } from 'react';
import { useGraphMount } from './useGraphMount';

interface useToolsPropsType {
  graph: Graph;
}

export const useTools = ({ graph }: useToolsPropsType) => {
  const clearTools = useCallback(() => {
    const nodes = graph.getNodes();
    nodes.forEach((node) => {
      node.removeTools();
    });
  }, [graph]);
  useGraphMount(graph, () => {
    graph.on('cell:click', ({ cell }) => {
      clearTools();
      if (cell.isNode()) {
        cell.addTools({
          name: 'sam-button',
          args: {},
        });
      }
    });
    graph.on('blank:click', ({ e }) => {
      console.log(e, '222');

      clearTools();
    });
  });
};
