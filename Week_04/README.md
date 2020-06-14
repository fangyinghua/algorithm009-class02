学习笔记
### 深度优先搜索和广度优先搜索

* DFS代码模板
>(多叉树)递归

```js
visited=new Set();//标记节点是否被访问过
var dfs=(node,visited)=>{
  if(visited.has(node)){ //terminator
    //已经存在
    return;
  }
  visited.add(node);

  //process current node here. 出来当前节点逻辑
  ...

  for(next_node in node.children){
    if(!visited.has(next_node)){
      dfs(next_node,visited);
    }
  }
}
```


>非递归写法

```js
var dfs=(tree)=>{
  let res=Array();
  if(tree.root===null){
    return;
  }
  visited,stack=[];
  stack.push(tree.root);//栈
  while(stack.length>0){
    let node=stack.pop();
    visited.add(node);

    process(node);
    let nodes = generate_related_nodes(node);
		stack.push(nodes); 
  }
}
```

* BFS代码模板 --队列

```Python
# Python
def BFS(graph, start, end):
  visited = set()
	queue = [] 
	queue.append([start]) 
	while queue: 
		node = queue.pop() 
		visited.add(node)
		process(node) 
		nodes = generate_related_nodes(node) 
		queue.push(nodes)
	# other processing work 

```


### 贪心算法

贪心算法是每一步都是最优的选择，从而希望结果是全局最优的算法，特点是不能回退。


### 二分查找 (有序)

* 前提条件:
    1. 目标函数的单调性;
    2. 存在上下界;
    3. 能够通过索引访问(index accessible).

* 代码模板

```js
left,right=0;//左右界
len=array.length;

while(left<=right){
  mid=(left+right)/2 |0;
  if(array[mid]===target){
    break or return result;
  }else if(array[mid]<target){
    left=mid+1;
  }else{
    right=mid-1;
  }
}

```
