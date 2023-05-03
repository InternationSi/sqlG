import React from 'react'
import ReactDom from 'react-dom'
import { Util, ToolsView, EdgeView } from '@antv/x6'
import { NodeTools } from '../components'



export  class ContextMenuTool extends ToolsView.ToolItem<
  EdgeView,
  ContextMenuToolOptions
> {
  private knob: HTMLDivElement

  render() {
    if (!this.knob) {
      this.knob = ToolsView.createElement('div', false) as HTMLDivElement
      this.knob.style.position = 'absolute'
      this.container.appendChild(this.knob)
    }
    console.log(this.cellView, '=====');
    const rectangle = this.cellView.getBBox()
    console.log('result: ', rectangle);
    rectangle.x -= 10 
    rectangle.y -= 10


    ReactDom.render(
      <div>
        <NodeTools rectangle={rectangle} />
      </div>,
      this.knob,
    )
    this.updatePosition({...rectangle})


    return this
  }


  private updatePosition(bbox?: any) {
     const style = this.knob.style
      // const pos = this.graph.clientToGraph(e.clientX, e.clientY)
      style.left = `${bbox.x}px`
      style.top = `${bbox.y}px`

  }



}

ContextMenuTool.config({
  tagName: 'div',
  isSVGElement: false,
})

export interface ContextMenuToolOptions extends ToolsView.ToolItem.Options {
  menu: React.ReactElement
}