
/*
 * @Author: sfy
 * @Date: 2023-05-07 17:20:26
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 17:24:31
 * @FilePath: /sqlG/src/Bpmn/effect/useGraphMount.ts
 * @Description: update here
 */

import { Graph } from "@antv/x6";
import { useEffect } from "react";

export const useGraphMount = (graph: Graph | undefined, fn: () => void) => {
  useEffect(() => {
    if (!graph) return;

    fn?.();
  }, [graph]);
};