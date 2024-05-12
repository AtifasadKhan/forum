// QuestionModal.tsx
import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const { TextArea } = Input;

interface QuestionModalProps {
  visible: boolean;
  addQuestion: (question: string) => void;
  onCancel: () => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  visible,
  addQuestion,
  onCancel,
}) => {
  const [questionText, setQuestionText] = useState<string>('');

  const handleOk = () => {
    if (questionText.trim() !== '') {
      addQuestion(questionText);
      setQuestionText('');
    }
  };

  return (
    <Modal
      title='Ask a Question'
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      footer={[
        <Button key='cancel' onClick={onCancel}>
          Cancel
        </Button>,
        <Button key='submit' type='primary' onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form layout='vertical'>
        <Form.Item label='Question'>
          <TextArea
            rows={4}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder='Type your question here...'
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default QuestionModal;
