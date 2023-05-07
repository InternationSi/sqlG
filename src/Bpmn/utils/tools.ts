/*
 * @Author: sfy
 * @Date: 2023-05-07 23:15:00
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 23:15:01
 * @FilePath: /sqlG/src/Bpmn/utils/tools.ts
 * @Description: update here
 */

import { Graph } from "@antv/x6";


/**
 * 清除tool工具
 */
export const clearTools = (graph: Graph) => {
  const nodes = graph.getNodes();
  nodes.forEach((node) => {
    node.removeTools();
  });
}