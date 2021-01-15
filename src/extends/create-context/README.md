## create-context
简化context创建，提供connect, class component 和 function component(useContext)可以混用

## Usage
```tsx
// context.tsx
import * as React from 'react';
import createContext from 'ROOT/libs/create-context';

export interface State {
    businessList: any[];
}
const { Provider, Consumer, connect } = createContext<State>({
    businessList: [],
});
export { Provider, connect }
export default function ContextComponent() {
    return <Provider state={{ businessList: [] }}>{children}</Provider>;
}

```

### connect用法同react-redux
```tsx

// class component
import { connect, State } from './context.tsx';

interface Props extends State{

}
class Test extends Component<Props, {}> {
    render() {
        console.log(this.props.list);
        return null;
    }
}
export default connect(({businessList}) => ({
    list: businessList,
}))(Test);
```