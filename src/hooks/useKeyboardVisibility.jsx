import { useEffect } from "react";

const useKeyboardVisibility = (contentId) => {
    useEffect(() => {
        const handleResize = () => {
            const windowHeight = window.innerHeight;
            const contentHeight = document.getElementById(contentId).offsetHeight;
            const keyboardVisible = windowHeight < contentHeight;
            if (keyboardVisible) {
                // Adjust layout for keyboard visibility
                document.getElementById(contentId).style.bottom = "40vh";
            } else {
                // Reset layout when keyboard is hidden
                document.getElementById(contentId).style.bottom = "0";
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [contentId]);
};

export default useKeyboardVisibility;
