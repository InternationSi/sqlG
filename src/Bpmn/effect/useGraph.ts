/*
 * @Author: sfy
 * @Date: 2023-04-26 23:06:07
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-09 22:24:42
 * @FilePath: /sqlG/src/Bpmn/effect/useGraph.ts
 * @Description: update here
 */

import { useEffect, useRef, useState } from "react"
import { Graph } from '@antv/x6'
import { register } from "../utils"
import { ContextMenuTool } from '../register/tools'
import { useDrage, useTools } from "./index"
import { Snapline } from "@antv/x6-plugin-snapline";
import { TOOL_NAME } from "../config"

export const useGraph = () => {

  const [graph, setGraph] = useState<Graph>()
  const container = useRef<HTMLDivElement>()

  useEffect(() => {
    Graph.registerNodeTool(TOOL_NAME, ContextMenuTool, true)
    register()
    const g = new Graph({
      container: container.current,
      width: 800,
      height: 400,
      connecting: {
        router: 'orth',
      },
      interacting: {
        // nodeMovable: false,
      }
    })
    g.use(
      new Snapline({
        enabled: true,
      })
    );
    setGraph(g)
    return () => {
      g.dispose()
    }
  }, [])

  useDrage({
    graph
  } as any)

  useTools({
    graph
  } as any)

  return {
    graph,
    container
  }
}