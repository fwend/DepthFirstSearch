const dfs = (start, graph) => {
    const visited = new Map([[start, 1]]);
    const stack = [start];
    
    console.log("visit " + start);
    
    while (stack.length) {
        const curr = stack[stack.length - 1];
        
        const next = graph.get(curr)
            .filter(v => !visited.has(v))
            .shift();
        
        if (next) {
            console.log("visit " + next);
            visited.set(next, 1);
            stack.push(next);
        } else {
            stack.pop();
        }  
    }
};

const graph = new Map();
graph.set('A', ['B', 'C', 'D', 'E']);
graph.set('B', ['F']);
graph.set('C', []);
graph.set('D', ['G']);
graph.set('E', []);
graph.set('F', ['H']);
graph.set('G', ['I']);
graph.set('H', []);
graph.set('I', []);

dfs('A', graph);