import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Button from './../button';

afterEach(cleanup);
it("renders without crashing",  ()=> {
    const div = document.createElement("div");
    render(<Button/>, div);
});

it("renders button correctly",  ()=> {
    const {getByTestId} = render(<Button label={"hello"}></Button>);
    expect(getByTestId('button')).toHaveTextContent("hello");
});

