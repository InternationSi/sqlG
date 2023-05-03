/*
 * @Author: sfy
 * @Date: 2022-12-07 19:45:06
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-02 23:21:35
 * @FilePath: /sqlG/src/Condition/Condition.tsx
 * @Description: update here
 */
import React from 'react'
import RelationTree from './components/RelationTree';
import RelationTerm from './components/RelationTerm';
import './index.scss'
const Condition = ({ items = [] }) => {
  const setElementTerm = (record, pos, onChange) => {
    return <RelationTerm data={record} onChange={onChange} />
  };
  return (
    <RelationTree setElementTerm={setElementTerm} />
  );

}

export default Condition;