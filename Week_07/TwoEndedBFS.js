const TwoEndedBFS=(begin,end)=>{

    let visited=new Set();

    let beginSet=new Set();
    let endSet=new Set();

    beginSet.add(begin);
    endSet.add(end);


    while(beginSet.size>0 && endSet.size>0){

        //比较beginSet.size  endSet.size 
        if(beginSet.size >endSet.size ){
            [endSet,beginSet]=[beginSet,endSet];//交换位置
        }

        let temp=new Set(); 
        for(let item of beginSet){ 
            process(item);//处理当前逻辑
            let newSet=generate_related_nodes(item);
            temp.add(newSet);
            visited.add(newSet);
        } 

        beginSet=temp; 
    }

}