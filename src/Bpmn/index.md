<!--
 * @Author: sfy
 * @Date: 2023-04-26 22:56:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-12 23:44:13
 * @FilePath: /sqlG/src/Bpmn/index.md
 * @Description: update here
-->


## BPMN

This is an example component.

```jsx
import  Bpmn  from './index.tsx';

export default () => {
  const nodes = [{
    id: '1',
    shape: 'event',
    position: {
      x: 50,
      y: 180,
    },
  }]

  return <Bpmn  data={{ nodes }}/>
}
```
