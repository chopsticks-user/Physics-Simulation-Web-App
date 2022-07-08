import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import { init2D } from "../../helper/T3/init"

const Space2D = ({axesColor, gridLinesColor, displayGrid, displayAxes}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        const currentRef = ref.current;
        const {gridScene, renderer, camera, orbit} = init2D(currentRef);

        const animation = () => {
            if (camera.position.y > 20 || camera.position.y < 5) {
                camera.position.y = 10;
                orbit.target.z = camera.position.z;
            }
            renderer.render(gridScene, camera);
        }
        renderer.setAnimationLoop(animation);

        currentRef.addEventListener("dblclick", () => {
            console.log(camera.position);
            console.log(orbit.target);
        });

    }, []);

    return (
        <div className="space-2d-container" ref={ref}>
            {/* <div style={{
                "height": "20px", 
                "color": "white", 
                "position": "relative", 
                "fontSize": "12px", 
                "display": "flex", 
                "alignItems": "center", 
                "width": "calc(100% - 60px)", 
                "left": "38px",  
                "overflow": "hidden"
            }}>
                <ul style={{
                    "listStyle": "none", 
                    "display": "inline-flex", 
                    "columnGap": "35px", 
                    "left": "50px", 
                }}>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                </ul>
            </div>
            <div style={{
                "width": "30px", 
                "color": "white", 
                "position": "relative", 
                "fontSize": "12px", 
                "display": "flex", 
                "alignItems": "center", 
                "height": "calc(100% - 60px)",  
                "overflow": "hidden"
            }}>

            </div> */}
        </div>
        
    );
}

Space2D.defaultProps = {
    axesColor: "red", 
    gridLinesColor: "white", 
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