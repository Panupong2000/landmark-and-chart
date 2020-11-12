import { Tree } from 'antd';
import React, { useState } from 'react';
import Photo from './Photo';
import 'antd/dist/antd.css';
//import './App.css';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
const { DirectoryTree } = Tree;

const Demo = () => {

  const treeData = [
    {
      title : "index",
      key : 'index',
      children : []
    },
    {
      title : 'test',
      key : 'test',
      children : []
    },
    {
      title : 'train',
      key : 'train',
      children : []
    } ,
    {
      title : 'xxx',
    key : 'xxx',
    children : []
  },
  {
    title : 'yyy',
  key : 'yyy',
  children : []
}    
  ]
 // console.log("1",treeData)
 /* const make1=(r)=>{
    r.keys().map((item)=>{
      const pos = item.substring(2,5)
      //const pot = item.substring(6,9)
      const head = treeData[0];
      let children = head.children;

      if(!children.find(x=> x.title === pos)){
        children.push(
          {
            title : pos,
            key : head.key + '/' + pos,
            isLeaf : false,
            children : [] 
          }
        ) 
      };
      children = children.find(x=> x.title === pos).children;
      if(!children.find(x=> x.title === pot)){
        children.push(
          {
            title : pot,
            key : head.key + '/' + pot,
            isLeaf : false,
            children : []
          }
        )
      };
      children = children.find(x=> x.title === pot).children;
      
        children.push(
          {
            title : item.substring(10,item.length),
            key : head.key + item,
            name: r(item).default,
            isLeaf :true
          }
        )
      }
    )
  }*/
  
  
      const makeTree=(r,i)=>{
        r.keys().map((item)=>{
        const pos = item.substring(8,11)
        const head = treeData[i];
        let children = head.children;
         //console.log("2",pos)
        
       if(!children.find(x=> x.title === pos[0])){
          children.push(
            {
              title : pos[0],
              key : head.key + '/' + pos[0],
              isLeaf : false,
              children : [] 
            }
          ) 
        };

        children = children.find(x=> x.title === pos[0]).children;
        if(!children.find(x=> x.title === pos[1])){
          children.push(
            {
              title : pos[1],
              key : head.key + '/' + pos[0] + '/' + pos[1],
              isLeaf : false,
              children : []
            }
          )
        }
        //console.log()
        children = children.find(x=> x.title === pos[1]).children;
        if(!children.find(x=> x.title === pos[2])){
          children.push(
            {
              title : pos[2],
              key : head.key + '/' + pos[0] + '/' + pos[1] + '/' + pos[2],
              isLeaf : false,
              children : []
            }
          )
        }

        children = children.find(x=> x.title === pos[2]).children
        children.push
        (
          {
            title : item.substring(8,item.length),
            key : head.key + item,
            name: r(item).default,
            isLeaf :true
          }
        );
      //console.log(r(item))
      //console.log("2",item.key)
        }) 
    }
    

      // const makeTreetrain=(r,i)=>{
      //   r.keys().map((item)=>{
      //   const pos = item.substring(4,7)
      //   const head = treeData[i];
      //   let children = head.children;
      //   //console.log(item)
  
      //   if(!children.find(x=> x.title === pos[0])){
      //     children.push(
      //       {
      //         title : pos[0],
      //         key : head.key + '/' + pos[0],
      //         isLeaf : false,
      //         children : [] 
      //       }
      //     )
      //   };

      //   children = children.find(x=> x.title === pos[0]).children;
      //   if(!children.find(x=> x.title === pos[1])){
      //     children.push(
      //       {
      //         title : pos[1],
      //         key : head.key + '/' + pos[0] + '/' + pos[1],
      //         isLeaf : false,
      //         children : []
      //       }
      //     )
      //   }

      //   children = children.find(x=> x.title === pos[1]).children;
      //   if(!children.find(x=> x.title === pos[2])){
      //     children.push(
      //       {
      //         title : pos[2],
      //         key : head.key + '/' + pos[0] + '/' + pos[1] + '/' + pos[2],
      //         isLeaf : false,
      //         children : []
      //       }
      //     )
      //   }

      //   children = children.find(x=> x.title === pos[2]).children
      //   children.push
      //   (
      //     {
      //       title : item.substring(4,item.length),
      //       key : head.key + item,
      //       name: r(item).default,
      //       isLeaf :true
      //     }
      //   );
      //   console.log(r(item))
      //   })
      // }

      // const index = require.context('../landmark/index');
      // makeTree(index,0)
      //r=null;
      // r = require.context('../landmark/train/0/0',true);
      // makeTreetrain(r,2);
      // r = null;
// r = require.context('../landmark/train/0/1');
//  makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/2');
//  makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/3');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/4');
//  makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/5');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/6');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/7');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/8');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/9');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/a');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/b');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/c');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/d');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/e');
// makeTreetrain(r,2);
// r = null;
// r = require.context('../landmark/train/0/f');
// makeTreetrain(r,2);
// r = null;

//const r = require.context('../landmark/xxx');     
 
const r = require.context('../landmark/test');
      //console.log(r.keys())
      makeTree(r,1)
      
     // console.log("1",r.keys())
  const [image,setimage] = useState()
  
    const handleSelect=(keys,event)=>{
        setimage(event.node.name)
        // console.log("1",event)
        //  console.log("2",keys)
        //  console.log("3",event.node)
        
    }
    
      
  return (
    <>
    <Layout>
      <Sider className = 'v_tree'>
        <div className="site-layout-background" >
          <DirectoryTree
            defaultExpandParent
            onSelect = {handleSelect}
            treeData= {treeData}
          />
          </div>
      </Sider>
      <Layout>
      <Content><div style={{padding: 9, textAlign : "center"}}>
        <h2>Landmark Reterval 2020</h2>
        <Photo imgSrc = {image}/> 
        </div>
        </Content>
    </Layout>
  </Layout>
    </>
  )
}

export default Demo;  