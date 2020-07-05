var findWords = function(board, words) {
    const  dx=[-1,1,0,0], dy=[0,0,-1,1],END_OF_WORD='#';
    let res=Array();
    let wordLen=words.length;
    if(wordLen===0){
        return res;
    }

    //构建trie树
    let trie=new Trie();
    for(let i=0;i<wordLen;++i){
        trie.insert(words[i]);
    }
    let root=trie.root;
    let row=board.length,col=board[0].length;  

    const dfs=(i,j,str,node)=>{
        if(node.isEnd){
          res.push(str);  
          node.isEnd=false;
        }
        if(i<0 || j<0 || i===row || j===col)return;
        let curNode=board[i][j];       
         if(curNode== END_OF_WORD || !node.containsKey(curNode)){
            return;
        }       
        board[i][j] = END_OF_WORD;
        str+=curNode;  
        for(let m=0;m<4;++m){//向四个方向扩散
            let x=i+dx[m],y=j+dy[m];  
            if(x>=0 && y>=0){
                dfs(x,y,str,node.get(curNode));
            } 
        }   
        board[i][j] =curNode; 
    }

    for(let i=0;i<row;++i){
        for(let j=0;j<col;++j){
            let str=board[i][j];            
            if (root.containsKey(str)) {
                dfs(i,j ,'',root);
            }
        }
    }  
    return res;
};