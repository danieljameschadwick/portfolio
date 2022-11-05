import { Splash } from "../Splash";
import { Navbar } from "../Navbar";
import { useElementOnScreen } from "../util/useElementOnScreen";

export const Header: React.FC = () => {
    const [containerRef, isVisible] = useElementOnScreen();

    return (
        <>
            <Splash ref={containerRef} />

            <Navbar sticky={!isVisible} />

            {/* @TODO: probably be better to add some margin instead */}
            {!isVisible ? <Navbar sticky={false} /> : ''}
        </>
    );
};
