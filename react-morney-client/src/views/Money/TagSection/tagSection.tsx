import styled from 'styled-components';
import {BaseSyntheticEvent, MouseEventHandler} from 'react';
import {message} from 'antd';

const TagWrapper = styled.div`
  height: 20vh;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  > ul{
    display: flex;
    margin-bottom: 20px;
    > li{
      padding: 2px 20px;
      background: #cacaca;
      margin-right: 10px;
      border-radius: 20px;
    }
  }
  > button{
    width: 80px;
    color: #a4a4a4;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #aaaaaa;
  }
`

const TagSection=()=>{
  const addTag =(e:BaseSyntheticEvent)=>{
    // 阻止合成事件的冒泡
    e.stopPropagation();
    let tmp = window.prompt('新增标签')
    if(tmp?.trim()){
      message.success('新增成功');
    }else{
      message.warning('标签名不能为空');
    }
  }
  return (
    <TagWrapper>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <button onClick={addTag}>新增标签</button>
    </TagWrapper>
  )
}
export {TagSection}
