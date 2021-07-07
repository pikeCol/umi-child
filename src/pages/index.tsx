import styles from './index.less';
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { useModel, MicroAppWithMemoHistory, connectMaster } from 'umi';

const IndexPage = (props) => {
  const globalState = useModel('@@qiankunStateFromMaster') || {};
  const { initialState, setInitialState } = useModel('@@initialState');
  const [visible, setVisible] = useState(false);
  console.log(globalState);

  return (
    <div>
      <h1 className={styles.title}>app1</h1>
      <p>globalState: {JSON.stringify(globalState)}</p>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开 app2
      </button>
      <Drawer
        title="嵌入 app2"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        width={800}
      >
        <MicroAppWithMemoHistory name="app2" url="/" current={2} pageSize={5} />
      </Drawer>
    </div>
  );
};

export default connectMaster(IndexPage);
