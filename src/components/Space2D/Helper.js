import * as THREE from "three"

export const grid2D = (gridSize, w, h, lineColor) => {
    const gridScene = new THREE.Scene();
    const margin = {top: 25, left: 50};
    const textMargin = {top: 3, left: 5};

    for (let i = 0; i < w / gridSize - 1; i++) {
        const newVerticalGridLine = new THREE.Mesh(new THREE.PlaneGeometry(2, h), new THREE.LineBasicMaterial({color: lineColor}));
        newVerticalGridLine.position.x = Math.floor(-w / 2) + margin.left + (i) * gridSize;
        newVerticalGridLine.position.y -= margin.top;
        newVerticalGridLine.rotation.y = 1;
        gridScene.add(newVerticalGridLine);
    }
    for (let i = 0; i < h / gridSize; i++) {
        const newHorizontalGridLine = new THREE.Mesh(new THREE.PlaneGeometry(w, 2), new THREE.LineBasicMaterial({color: lineColor}));
        newHorizontalGridLine.position.x += margin.left;
        newHorizontalGridLine.position.y = Math.floor(-h / 2) + margin.top + h % gridSize + (i) * gridSize;
        newHorizontalGridLine.rotation.x = 1;
        gridScene.add(newHorizontalGridLine);
    }
    return gridScene;
}

export const camera2D = (w, h) => {
    return new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2);
}