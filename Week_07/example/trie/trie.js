class TrieNode{
   //R 26个字母
   
    constructor(R=26){
        this.links=Array(R);
        this.R=R;
        this.isEnd=false;//标记是否截止
    }
    getIndex(ch){        
        return ch.codePointAt(0)-'a'.codePointAt(0);
    }
     containsKey=(ch)=>{
         let i= this.getIndex(ch); 
         return this.links[i]!=undefined;
    }
     get(ch){
        let i= this.getIndex(ch);
        return this.links[i];
    }
    put(ch,node){
        let i= this.getIndex(ch);
        this.links[i]=node;
    }
    setEnd(){
        this.isEnd=true;
    }
    isEnds(){
        return this.isEnd;
    } 
}

class Trie{   
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let len=word.length;
        let curNode=this.root;     
        for(let i=0;i<len;++i){
           let itemStr= word[i];
           let res=curNode.containsKey(itemStr);  
           if(!res){
            curNode.put(itemStr, new TrieNode());

           }
           curNode=curNode.get(itemStr);
        }        
        curNode.setEnd();      
    }
  
    searchPrefix(word){
        let node=this.root;
        let len=word.length;
        for(let i=0;i<len;++i){
            let itemStrtr=word[i];          
            if(!node.containsKey(itemStrtr)){
               return null;
           }
           node=node.get(itemStrtr);
        }
        return node;
    }
    search(word){
        let node=this.searchPrefix(word); 
        return node!=null && node.isEnds();
    }
    startsWith(prefix){
        let node=this.root;
        let len=prefix.length; 
        for(let i=0;i<len;++i){
            let itemStr=prefix[i];          
            if(!node.containsKey(itemStr)){
               return false;
           }
           node=node.get(itemStr);
        }
        return true;
    }
}

let trie=new Trie();

trie.insert('apple');
trie.insert('app');
console.log(trie);
console.log(trie.search('apple'));
console.log(trie.startsWith('apple'));

