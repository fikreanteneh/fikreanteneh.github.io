// import { useState } from "react";
import Assets from "..";

const Rocket = () => {
    // const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    // const [direction, setDirection] = useState(0)
    // const velocity = 1;
    // const turnRate = 10;
    // const changeDirection = [-1, 0, 1]


    // useEffect(() => {
    //     const moveRocket = () => {
    //         const randomIndex = Math.floor(Math.random() * changeDirection.length);
    //         const newChangeDirection = changeDirection[randomIndex];
    //         let newDirection = direction + (newChangeDirection * turnRate)
    //         if (newDirection > 360) newDirection = newDirection - 360
    //         if (newDirection < 0) newDirection = 360 - newDirection

    //         const newX = position.x + velocity.vx;
    //         const newY = position.y + velocity.vy;

    //         // Change direction if the rocket is about to move out of the window
    //         if (newX <= 0 || newX >= window.innerWidth) {
    //             setVelocity((prevVelocity) => ({ ...prevVelocity, vx: -prevVelocity.vx }));
    //         }
    //         if (newY <= 0 || newY >= window.innerHeight) {
    //             setVelocity((prevVelocity) => ({ ...prevVelocity, vy: -prevVelocity.vy }));
    //         }

    //         setPosition({ x: newX, y: newY });
    //     };

    //     const interval = setInterval(moveRocket, 16);
    //     return () => clearInterval(interval);
    // }, [position]);

    return (
        <div className="inline">
            <img src={Assets.Icons.Rocket} alt="Rocket" />
        </div>
    );
};

export default Rocket;
