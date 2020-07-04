/**
 * @param {number[][]} M 为N*N的二维矩阵
 * @return {number}
 * dfs
 */
var findCircleNum = function(M) {
    let n=M.length;
    let visited=new Array(n);
    let ret=0;
    const dfs=(i)=>{
        for(let j=0;j<n;++j){
            if(M[i][j]===1 && !visited[j]){//值为1 并且没有被访问过
                visited[j]=true;
                dfs(j);
            }
        }
    }
    for(let i=0;i<n;++i){
        if(!visited[i]){
            dfs(i);//将相关的 i附近 值为1的标记为访问过
            ret++;
        }
    }
    return ret;   
};

/**
 * 并查集
 * 方法二
 */
class UnionFind{
    constructor(n){
        this.count=n;
        this.parent=new Array(n);
        for(let i=0;i<n;++i){
            this.parent[i]=i;
        }
    }
    find(p){
        let parent=this.parent;
        while(p!=parent[p]){
            parent[p]=parent[parent[p]];
            p=parent[p];
        }
        return p;
    }
    union(p,q){        
        let rootP=this.find(p);
        let rootQ=this.find(q);
        if(rootP===rootQ)return;
        this.parent[rootP]=rootQ;
        this.count--;
    }
    getCount(){
        return this.count;
    }
}
function findCircleNum(M){
    let n=M.length;
    let uf=new UnionFind(n);
    for(let i=0;i<n-1;++i){
        for(let j=i+1;j<n;++j){
            if(M[i][j]===1){
                uf.union(i,j);
            }
        }
    }
    return uf.getCount();
}