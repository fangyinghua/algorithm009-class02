/**
 * 基于BFS
 * A* serach 代码模板
 * 
 *  */
function aStartSearch(graph,start,end){
    // priority_queue
    pq=collections.priority_queue();//优先级-->估价函数
    pq.append([start]);
    visited.add(start);

    while(pq){
        node=pq.pop();//can we add more intelligence here?
        visited.add(node);

        process(node);

        nodes=generate_related_nodes(node)

        unvisited=[node for node in nodes if node not in visited];
        pq.push(unvisited);
    }
}