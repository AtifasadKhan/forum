import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import QuestionModal from '../../components/question-modal/question-modal';
import Question from '../../components/questions/questions';
import { PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import './forum.scss';
const { Title } = Typography;
const Forum = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddQuestion = (question: string) => {
    setQuestions([...questions, question]);
    setIsModalVisible(false);
  };
  return (
    <div>
      <Row justify='space-between'>
        <Col>
          <Title level={2}>Forum App</Title>
        </Col>

        <Col className='modal-btn-margin'>
          <Button
            icon={<PlusOutlined />}
            type='primary'
            block
            onClick={() => setIsModalVisible(true)}
          >
            Add Question
          </Button>
        </Col>
      </Row>
      <QuestionModal
        visible={isModalVisible}
        addQuestion={handleAddQuestion}
        onCancel={() => setIsModalVisible(false)}
      />

      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
};

export default Forum;
