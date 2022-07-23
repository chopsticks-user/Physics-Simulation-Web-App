import Neko2D from "../../Neko2D.mjs"

export const SAT = (object1, object2) => {
    const nVertices1 = object1.vertices.length;
    const nVertices2 = object2.vertices.length;

    lastVertex = object1.vertices[nVertices1 - 1];
    object1.vertices.forEach((vertex) => {
        const projAxis = new module.V2(vertex.x - lastVertex.x, vertex.y - lastVertex.y).unit();
        let min = 0;
        let max = 0; 
        object1.vertices.forEach((vertex) => {
            const dot = module.V2.dotProduct(vertex, projAxis);
            min = module.min(min, dot);
            max = module.max(max, dot);
            
        });
    });
}