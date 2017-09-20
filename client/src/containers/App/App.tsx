import * as React from 'react';
import { observer } from 'mobx-react';
import { MySharedComponent }  from "my-shared";

export interface AppProps {
}

@observer
export class App extends React.Component<AppProps, any> {
    render() {
        return <div>
            This is the App
            <MySharedComponent />
        </div>
    }
}