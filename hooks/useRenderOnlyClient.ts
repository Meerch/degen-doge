import {useEffect, useState} from "react";

const useRenderOnlyClient = () => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return {isReadyRender: hydrated}
}

export default useRenderOnlyClient