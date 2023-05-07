<!--
 * @Author: sfy
 * @Date: 2023-04-26 22:56:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 17:37:07
 * @FilePath: /sqlG/src/Bpmn/index.md
 * @Description: update here
-->


## eventNode

```jsx
import { useRef, useEffect } from 'react';
import { Graph } from '@antv/x6'
import {registerEventNode  } from './register'
export default () => {

  const con = useRef();

  useEffect(() => {
    registerEventNode()
    const graph = new Graph({
      width: 400,
      height: 400,
      container: con.current,
      grid: true,
    })

    graph.addNode({
      x: 200,
      y: 160,
      shape: 'event',
    })
  }, [])

  return <div ref={con} />
}
```


## BPMN

This is an example component.

```jsx
import  Bpmn  from './index.tsx';

export default () => {

  return <Bpmn />
}
```
