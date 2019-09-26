function walk(node) {
    return {
        type: Sk.ParseTables.number2symbol[node.type] || Sk.token.tok_name[node.type],
        children: node.children ? node.children.map(x => walk(x)) : null,
        value: node.value
    }
}

var know_types = {};

function gettype(type, level){
    if (know_types[type] !== undefined) {
        know_types[type] = know_types[type] + 1;
        return type + know_types[type];
    }

    know_types[type] = 0;
    return type;
}

function graph(node, level) {
    if (node.children) {
        next_level = level + 1;
        return  node.children.reduce((acc, x) => {
            return acc + node.type + "_" + (level - 1) + "->" + x.type + "_" + level + "\n" + graph(x, next_level)
        }, "");
    }

    return "";
}