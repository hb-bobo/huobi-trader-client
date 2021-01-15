import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { DefaultRootState, MapStateToProps, ConnectProps, Options } from './types';

const defaultMapStateToProps = () => ({});

export default function createContext<T = DefaultRootState>(state: T) {
    const context = React.createContext<T>(state);

    const Provider: React.FC<{ store: T }> = (props) => {
        return <context.Provider value={props.store}>{props.children}</context.Provider>;
    };

    function connect<TStateProps = Record<string, any>, TOwnProps = Record<string, any>, State = T>(
        mapStateToProps?: MapStateToProps<TStateProps, TOwnProps, State>,
        options: Options = {},
    ) {
        const finalMapStateToProps = mapStateToProps || defaultMapStateToProps;

        return function wrapWithConnect<C extends React.ComponentType<any>>(WrappedComponent: C) {
            const ConsumerWrap: React.FC<any> = (props) => {
                return (
                    <context.Consumer>
                        {(state) => {
                            return <WrappedComponent {...props} {...finalMapStateToProps(state as any, props)} />;
                        }}
                    </context.Consumer>
                );
            };
            if (options.forwardRef) {
                const forwarded = React.forwardRef((props: TOwnProps, ref) => {
                    return <ConsumerWrap {...props} forwardedRef={ref} />;
                });
                return hoistStatics(forwarded, WrappedComponent) as any;
            }
            return hoistStatics(ConsumerWrap, WrappedComponent) as any;
        };
    }

    return {
        context,
        Consumer: context.Consumer,
        Provider,
        connect,
    };
}
