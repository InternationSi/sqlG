/*
 * @Author: sfy
 * @Date: 2023-05-07 16:11:39
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 17:24:22
 * @FilePath: /sqlG/src/Bpmn/effect/useDrage.ts
 * @Description: update here
 */

import { Edge, Graph } from '@antv/x6';
import _ from 'lodash';
import { useGraphMount } from './useGraphMount';
interface useDragePropsType {
  graph: Graph;
}

export const useDrage = ({ graph }: useDragePropsType) => {

  useGraphMount(graph,() => {
    console.log('graph: ', graph);
    let stageEdge: Edge<Edge.Properties>[] = [];
    graph.on('node:move', (params) => {
      const { e, x, y, node, view } = params;
      // 把相关的线缓存下，并把正在拽拖的节点遍去除
      const connectEdges = graph.getConnectedEdges(node);
      stageEdge = connectEdges;
      graph.removeConnectedEdges(node);

      // 克隆节点
      const cloneNode = node.clone();
      cloneNode.id = 'oldMoving';
      graph.addNode(cloneNode);

      // 创建拖拽前此节点相关的线
      const cloneEdges = connectEdges.map((edge) => {
        let cloneEdge = edge.clone();
        const source = cloneEdge.getSource();
        const target = cloneEdge.getTarget();
        if (source?.cell === node.id) {
          cloneEdge.setSource(cloneNode);
        } else if (target?.cell === node.id) {
          cloneEdge.setTarget(cloneNode);
        } else {
          return undefined;
        }
        return cloneEdge;
      });
      // cloneEdges.filter(Boolean)
      graph.addEdges(_.compact(cloneEdges));
    });

    graph.on('node:moved', ({ e, x, y, node, view }) => {
      console.log('是不是结束');
      graph.addEdges(stageEdge);
      graph.removeConnectedEdges('oldMoving');
      graph.removeNode('oldMoving');
    });

  });
};
