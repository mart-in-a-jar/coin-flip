import { useState } from "react";
import styles from "./App.module.scss";
// import sideAImg from "./img/105-freelancer.svg";
import sideAImg from "./img/sideA.png";
// import sideBImg from "./img/106-italy.svg";
import sideBImg from "./img/sideB.jpg";
import placeholderImg from "./img/placeholder.jpg";

function App() {
    const [coinStyle, setCoinStyle] = useState("");
    const [hasSpun, setHasSpun] = useState(false);

    const sides = {
        a: {
            img: sideAImg,
            name: "Side A",
        },
        b: {
            img: sideBImg,
            name: "Side B",
        },
    };

    const spin = () => {
        setCoinStyle("");
        setHasSpun(true);
        setTimeout(() => {
            if (Math.random() < 0.5) {
                setCoinStyle(styles.b);
            } else {
                setCoinStyle(styles.a);
            }
        }, 100);
    };
    return (
        <div className={styles.root}>
            {!hasSpun && (
                <div className={styles.pointer}>
                    Spin that shit<span>👇🏽</span>
                </div>
            )}
            <div className={`${styles.coin} ${coinStyle}`} onClick={spin}>
                {!hasSpun && (
                    <div className={styles.placeholder}>
                        <img src={placeholderImg} alt="Placeholder" />
                    </div>
                )}
                <div className={styles["side-a"]}>
                    <img src={sides.a.img} alt={sides.a.name} />
                </div>
                <div className={styles["side-b"]}>
                    <img src={sides.b.img} alt={sides.b.name} />
                </div>
            </div>
        </div>
    );
}

export default App;
