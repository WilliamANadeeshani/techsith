import React, {Suspense, useEffect, useState} from 'react';
import {fetchData} from './ApiDataLazyLoaderWrapper';

const resource = fetchData();

function Name() {
    const name = resource.name.read();
    return <h5>{name} </h5>;
};
function Address() {
    const address = resource.address.read();
    return <h5>{address} </h5>;
};
function LazyLoadAsync() {
    return (
        <div>
            <Suspense fallback={<h5>Loading...</h5>}>
                <Name/>
                <Address/>
            </Suspense>
        </div>
    );

};

export default LazyLoadAsync;