// Question.tsx
import React, { useState } from 'react';
import { Card, Button, Form, Input, Typography } from 'antd';
import Comment from '../comment/comment';
import './questions.scss';
const { Title } = Typography;
const { TextArea } = Input;

interface IQuestionsList {
  question: string;
}
const Question: React.FC<IQuestionsList> = ({ question }) => {
  const [form] = Form.useForm();
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>('');

  const handleCommentSubmit = (values: { comment: string }) => {
    const { comment } = values;
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      form.setFieldsValue({ comment: '' });
    }
  };

  return (
    <Card className='mb-20'>
      <Title level={4}>{question}</Title>
      <Form form={form} onFinish={handleCommentSubmit}>
        <Form.Item name='comment'>
          <TextArea
            rows={2}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder='Type your comment here'
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Add Comment
          </Button>
        </Form.Item>
      </Form>
      <div>
        <Title level={5}>Comments:</Title>

        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </Card>
  );
};

export default Question;
