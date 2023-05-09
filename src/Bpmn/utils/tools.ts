/*
 * @Author: sfy
 * @Date: 2023-05-07 23:15:00
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-09 22:30:33
 * @FilePath: /sqlG/src/Bpmn/utils/tools.ts
 * @Description: update here
 */

import { Cell, Graph } from "@antv/x6";
import { TOOL_NAME } from "../config";


/**
 * 清除tool工具
 */
export const clearTools = (graph: Graph) => {
  const nodes = graph.getNodes();
  nodes.forEach((node) => {
    node.removeTools();
  });
}

/**
 * 创建tool工具
 */

export const createTool = (cell: Cell, graph: Graph, params={}) => {
  cell.addTools({
    name: TOOL_NAME,
    args: {
      graph,
    },
  });
}