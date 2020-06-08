/**
 * 组合
 * @param n 
 * @param k 
 */

function combine(n: number, k: number): number[][] {
  let result=new Array();
  const dfs=(level:number,k:number,path:number[],res:number[][])=>{
      if(path.length===k){
          res.push([...path]);
      }
      for(let i=level;i<n+1;++i){
          path.push(i);
          dfs(i+1,k,path,res);
          
          path.pop();
      }
  }

  dfs(1,k,Array(),result);

  return result;
};