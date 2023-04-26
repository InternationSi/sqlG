/*
 * @Author: sfy
 * @Date: 2023-04-26 23:06:07
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-26 23:22:22
 * @FilePath: /sqlG/src/Bpmn/effect/useGraph.ts
 * @Description: update here
 */

import { useEffect, useRef, useState } from "react"
import { Graph } from '@antv/x6'
import { register } from "../utils"

export const useGraph = () => {

  const [graph, setGraph] = useState<Graph>()
  const container = useRef<HTMLDivElement>()

  useEffect(() => {
    register()
    const g = new Graph({
      container: container.current,
      connecting: {
        router: 'orth',
      },
    })
    setGraph(g)
    return () => {
      g.dispose()
    }
  }, [])


  useEffect(() => {
  
  }, [])

  return {
    graph,
    container
  }
}