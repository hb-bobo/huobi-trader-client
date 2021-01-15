export interface DefaultRootState {}
export type MapStateToProps<TStateProps, TOwnProps, State = DefaultRootState> = (
    store: State,
    ownProps: TOwnProps,
) => TStateProps;

export interface ConnectProps {
    forwardedRef: React.Ref<any>;
}
export interface Options {
    /**
     * If true, use React's forwardRef to expose a ref of the wrapped component
     *
     * @default false
     */
    forwardRef?: boolean;
}
