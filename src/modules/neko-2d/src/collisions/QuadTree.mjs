import { QUADTREE_CAPACITY } from "../../Ultis/Ultis.module.js"

export class QuadTree {
    #container;
    #boundary;
    #children;

    constructor(width = 0, height = 0, center = { x: 0, y: 0 }) {
        this.#container = [];
        this.#boundary = {
            topLeft: { x: center.x - width / 2, y: center.y + height / 2 },
            bottomRight: { x: center.x + width / 2, y: center.y - height / 2 }
        }
        this.#children = {
            NW: null,
            NE: null,
            SW: null,
            SE: null
        };
    }

    #subdivide = () => {
        const subWidth = (this.#boundary.bottomRight.x - this.#boundary.topLeft.x) / 2;
        const subHeight = (this.#boundary.topLeft.y - this.#boundary.bottomRight.y) / 2;
        const childCenters = {
            NW: {
                x: this.#boundary.topLeft.x + 0.5 * subWidth,
                y: this.#boundary.bottomRight.y + 1.5 * subHeight
            },
            NE: {
                x: this.#boundary.topLeft.x + 1.5 * subWidth,
                y: this.#boundary.bottomRight.y + 1.5 * subHeight
            },
            SW: {
                x: this.#boundary.topLeft.x + 0.5 * subWidth,
                y: this.#boundary.bottomRight.y + 0.5 * subHeight
            },
            SE: {
                x: this.#boundary.topLeft.x + 1.5 * subWidth,
                y: this.#boundary.bottomRight.y + 0.5 * subHeight
            }
        }

        this.#children.NW = new QuadTree(subWidth, subHeight, childCenters.NW);
        this.#children.NE = new QuadTree(subWidth, subHeight, childCenters.NE);
        this.#children.SW = new QuadTree(subWidth, subHeight, childCenters.SW);
        this.#children.SE = new QuadTree(subWidth, subHeight, childCenters.SE);

        let len = this.#container.length;
        while (len--) {
            this.#children.NW.insert(this.#container[len]);
            this.#children.NE.insert(this.#container[len]);
            this.#children.SW.insert(this.#container[len]);
            this.#children.SE.insert(this.#container[len]);
        };

        this.#container = [];
    }

    contain = (node) => {
        if (node.y - node.maxReach > this.#boundary.topLeft.y) {
            return false;
        }
        if (node.y + node.maxReach < this.#boundary.bottomRight.y) {
            return false;
        }
        if (node.x - node.maxReach > this.#boundary.bottomRight.x) {
            return false;
        }
        if (node.x + node.maxReach < this.#boundary.topLeft.x) {
            return false;
        }
        return true;
    }

    insert = (node) => {
        if (this.contain(node) === false) {
            return false;
        }
        if (this.#children.NW === null) {
            if (this.#container.length < QUADTREE_CAPACITY) {
                this.#container.push(node);
                return true;
            }
            this.#subdivide();
        }
        this.#children.NW.insert(node);
        this.#children.NE.insert(node);
        this.#children.SW.insert(node);
        this.#children.SE.insert(node);
        return false;
    }

    query = (node, outterDistance) => {
        if (!this.contain(node)) {
            return [];
        }
        let result = this.#container.filter((value) => {
            return (
                value.id !== node.id && outterDistance >= Math.sqrt(
                    (value.x - node.x) ** 2 + (value.y - node.y) ** 2
                ) - node.maxReach - value.maxReach
            )
        });
        if (!this.#children.NW) {
            return result;
        }
        result = result.concat(this.#children.NW.query(node, outterDistance));
        result = result.concat(this.#children.NE.query(node, outterDistance));
        result = result.concat(this.#children.SW.query(node, outterDistance));
        result = result.concat(this.#children.SE.query(node, outterDistance));
        return result;
    }
}
