/*
 * @Author: sfy
 * @Date: 2023-04-26 23:06:07
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-02 23:37:01
 * @FilePath: /sqlG/src/Bpmn/effect/useGraph.ts
 * @Description: update here
 */

import { useEffect, useRef, useState } from "react"
import { Graph } from '@antv/x6'
import { register, behavior } from "../utils"
import { ContextMenuTool } from '../register/tools'

export const useGraph = () => {

  const [graph, setGraph] = useState<Graph>()
  const container = useRef<HTMLDivElement>()

  useEffect(() => {
    Graph.registerNodeTool('sam-button', ContextMenuTool, true)
    register()
    console.log(container.current, 'container');
    
    const g = new Graph({
      container: container.current,
      width: 800,
      height: 400,
      connecting: {
        router: 'orth',
      },
    })
    setGraph(g)
    behavior(g)
    return () => {
      g.dispose()
    }
  }, [])

  return {
    graph,
    container
  }
}