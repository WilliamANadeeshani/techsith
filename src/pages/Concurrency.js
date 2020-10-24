import React, {Suspense} from 'react';
import Loader from "./Loader";

const LazyLoadComp = React.lazy(() => import("./LazyComponent"));

const Concurrency = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<Loader/>}>
                <LazyLoadComp/>
            </Suspense>
        </React.Fragment>
    );
};

export default Concurrency;