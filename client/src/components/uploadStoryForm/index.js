import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import Upload from './imageInput';

const { TextArea } = Input;

const StoryForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} style={{ color: '@primary' }}>
        أضف قصتك
      </Button>
      <Modal
        title="اضف قصتك"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <Input />
        <Upload />
        <TextArea rows={4} />
      </Modal>
    </>
  );
};

export default StoryForm;
