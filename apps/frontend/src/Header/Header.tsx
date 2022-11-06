import { Splash } from "../Splash";
import { Navbar } from "../Navbar";
import { useElementOnScreen } from "../util/useElementOnScreen";

export const Header: React.FC = () => {
    const [containerRef, isVisible] = useElementOnScreen(true);

    return (
        <>
            <Splash ref={containerRef} />

            <Navbar sticky={!isVisible} />

            {/* @TODO: probably be better to add some margin instead
                of duplicating navbars with one being hidden */}
            {!isVisible ? <Navbar sticky={false} /> : ''}
        </>
    );
};
