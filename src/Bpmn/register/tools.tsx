/*
 * @Author: sfy
 * @Date: 2023-05-02 20:26:07
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-07 23:21:01
 * @FilePath: /sqlG/src/Bpmn/register/tools.tsx
 * @Description: update here
 */
import { EdgeView, Graph, ToolsView } from '@antv/x6';
import React from 'react';
import ReactDom from 'react-dom';
import { NodeTools } from '../components';

export class ContextMenuTool extends ToolsView.ToolItem<
  EdgeView,
  ContextMenuToolOptions
> {
  private knob: HTMLDivElement;

  render() {
    if (!this.knob) {
      this.knob = ToolsView.createElement('div', false) as HTMLDivElement;
      this.knob.style.position = 'absolute';
      this.container.appendChild(this.knob);
    }
    const rectangle = this.cellView.getBBox();
    rectangle.x -= 10;
    rectangle.y -= 10;

    ReactDom.render(
      <div>
        <NodeTools rectangle={rectangle} graph={this.options?.graph} />
      </div>,
      this.knob,
    );
    this.updatePosition({ ...rectangle });

    return this;
  }

  private updatePosition(bbox?: any) {
    const style = this.knob.style;
    // const pos = this.graph.clientToGraph(e.clientX, e.clientY)
    style.left = `${bbox.x}px`;
    style.top = `${bbox.y}px`;
  }
}

ContextMenuTool.config({
  tagName: 'div',
  isSVGElement: false,
});

export interface ContextMenuToolOptions extends ToolsView.ToolItem.Options {
  graph: Graph;
}
