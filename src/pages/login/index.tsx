import React from 'react';
import classnames from 'classnames';
import { Form, Input, Button } from 'antd';
import { history } from 'umi';
import './index.less';
import { login } from '@/api';
interface Props {}

interface FormData {
  username: string;
  password: string;
}
const prefixCls = `login`;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const index: React.FC<Props> = props => {
  const {} = props;
  const onFinish = (values: Partial<FormData>) => {
    if (values.username && values.password) {
      login
        .loginAccount({
          userName: values.username,
          password: values.password,
        })
        .then(() => {
          history.push('/');
        })
        .catch(() => {});
    }
  };

  const onFinishFailed = (errorInfo: Record<string, any>) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={classnames(prefixCls)}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default index;