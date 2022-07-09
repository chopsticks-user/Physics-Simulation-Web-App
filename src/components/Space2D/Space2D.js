import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
// import Camera2D from "../../helper/T3/Camera"
// import Grid2D from "../../helper/T3/Grid"
// import Renderer2D from "../../helper/T3/Renderer"
// import Orbit2D from "../../helper/T3/Orbit"
import { initGridLinesAttr } from "../../helper/T3/init"
import Space2DController from "../../helper/T3/SpaceController"

const Space2D = ({axesColor, gridLinesColor, displayAxes, displayGrid}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        let w = ref.current.clientWidth;
        let h = ref.current.clientHeight;

        const controller = new Space2DController(ref.current);


        // const camera = new Camera2D(w, h);
        // const renderer = new Renderer2D(w, h);
        // const grid = new Grid2D();
        // const orbit = new Orbit2D(camera, renderer);
        // ref.current.appendChild(renderer.t3Component.domElement);

        // const animation = () => {
        //     if (camera.updateViewAttr()) {
        //         orbit.t3Component.target.z = camera.t3Component.position.z;
        //     }
        //     renderer.t3Component.render(grid.t3Scene, camera.t3Component);
        // }
        // renderer.t3Component.setAnimationLoop(animation);

        ref.current.addEventListener("dblclick", (e) => {
            console.log(w, h);
            console.log(initGridLinesAttr(controller.camera.t3Component.position.y, w, h));
            console.log(controller.camera.getPosition());
            console.log(controller.camera.t3Component.position);
            console.log(controller.grid.getUnitSizeToPixel(controller.camera));
        });

    }, [axesColor, gridLinesColor]);

    return (
        <div className="space-2d-container" ref={ref}>{console.log("Space 2D was rendered.")}</div>
        
    );
}

Space2D.defaultProps = {
    axesColor: "red", 
    gridLinesColor: "#4f4f4f", 
    displayGrid: true, 
    displayAxes: true, 
}

Space2D.propTypes = {
    axesColor: PropTypes.string.isRequired, 
    gridLinesColor: PropTypes.string.isRequired, 
    displayGrid: PropTypes.bool.isRequired, 
    displayAxes: PropTypes.bool.isRequired, 
}

export default Space2D;