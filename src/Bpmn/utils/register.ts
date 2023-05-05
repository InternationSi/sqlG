/*
 * @Author: sfy
 * @Date: 2023-04-26 23:13:24
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-05 23:18:14
 * @FilePath: /sqlG/src/Bpmn/utils/register.ts
 * @Description: update here
 */

import { Graph,  } from '@antv/x6'
export const register = () => {

  Graph.registerNode(
    'event',
    {
      inherit: 'circle',
      attrs: {
        body: {
          strokeWidth: 2,
          stroke: '#5F95FF',
          fill: '#FFF',
        },
      },
    },
    true,
  )
  
  Graph.registerNode(
    'activity',
    {
      inherit: 'rect',
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'image',
          selector: 'img',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        body: {
          rx: 6,
          ry: 6,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
          strokeWidth: 1,
        },
        img: {
          x: 6,
          y: 6,
          width: 16,
          height: 16,
          'xlink:href':
            'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ',
        },
        label: {
          fontSize: 12,
          fill: '#262626',
        },
      },
    },
    true,
  )
  
  Graph.registerNode(
    'gateway',
    {
      inherit: 'polygon',
      attrs: {
        body: {
          refPoints: '0,10 10,0 20,10 10,20',
          strokeWidth: 2,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        label: {
          text: '+',
          fontSize: 40,
          fill: '#5F95FF',
        },
      },
    },
    true,
  )
  
  Graph.registerEdge(
    'bpmn-edge',
    {
      inherit: 'edge',
      attrs: {
        line: {
          stroke: '#A2B1C3',
          strokeWidth: 2,
        },
      },
    },
    true,
  )
}

export const behavior = (graph: Graph) => {

  const clearTools = () => {
    const nodes = graph.getNodes()
    nodes.forEach(node => {
      node.removeTools()
    })
  }

  graph.on('cell:click', ({ cell }) => {
    console.log('cell: ', cell);
    clearTools()
    if (cell.isNode()) {
      // cell.addTools([
      //   {
      //     name: 'boundary',
      //     args: {
      //       attrs: {
      //         fill: '#7c68fc',
      //         stroke: '#333',
      //         'stroke-width': 1,
      //         'fill-opacity': 0.2,
      //       },
      //     },
      //   },
      //   {
      //     name: 'button-remove',
      //     args: {
      //       x: 0,
      //       y: 0,
      //       offset: { x: 10, y: 10 },
      //     },
      //   },
      // ])
      cell.addTools({
        name: 'sam-button',
        args: {
        }
      })
    } 
  })
  graph.on('blank:click', ({ e }) => {
    console.log(e, '222');
    
    clearTools()
    // cell.removeTools()
  })

  graph.on("node:move", ({ e, x, y, node, view }) => {
    console.log('node: ', node);
    console.log('e: ', e);
    const oldCell = graph.createNode(node)

    graph.removeConnectedEdges(node)
    oldCell.id = 'aefafe'
     graph.addNode(oldCell)
     console.log('oldCell: ', oldCell);
  });
}