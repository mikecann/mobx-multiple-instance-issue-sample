import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

export interface MySharedComponentProps {
}

@observer
export class MySharedComponent extends React.Component<MySharedComponentProps, any> {
    render() {
        return <div>
            hello world!
        </div>
    }
}