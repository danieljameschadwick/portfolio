import { useRef, useState } from "react";
import { Splash } from "../Splash";
import { Navbar } from "../Navbar";
import { useElementOnScreen } from "../util/useElementOnScreen";

export const Header: React.FC = () => {
    const [containerRef, isVisible] = useElementOnScreen();
    const [inView, setInView] = useState<boolean>(false);

    return (
        <>
            <Splash ref={containerRef} inView={isVisible} />

            <Navbar sticky={!isVisible} />

            {/* @TODO: probably be better to add some margin instead */}
            {!isVisible ? <Navbar sticky={false} /> : ''}
        </>
    );
};
