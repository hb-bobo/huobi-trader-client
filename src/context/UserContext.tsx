import * as React from 'react';
import useModel, { ActionMap } from 'use-easy-model';
import createContext from '@/extends/create-context';
import { user } from '@/api';

export interface State {
  user: string;
}
const initialState: State = {
  user: '',
};
/**
 * actions 触发改变state
 */
const reducers = {
  /**
   * 更新用户数据
   * @param state
   * @param payload
   */
  updateUser(state: State, payload: Partial<State>) {
    return {
      user: payload,
    };
  },
};
// 创建context
const { context: userContext, Provider, connect } = createContext<{
  store: State;
  actions: ActionMap<typeof reducers>;
}>({
  store: initialState,
  actions: {} as any,
});
export { userContext, connect };

/**
 * 用户数据
 * @param param
 */
export const UserContextProvider: React.FC = function({ children }) {
  const [state, actions] = useModel({
    state: initialState,
    reducers,
    // debug: AppConfig.isDev,
  });

  React.useEffect(() => {
    user
      .queryCurrent()
      .then(userInfo => {
        actions.updateUser(userInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <Provider
      store={{
        store: state,
        actions,
      }}
    >
      {children}
    </Provider>
  );
};
