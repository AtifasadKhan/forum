// Comment.tsx
import React from 'react';
import './comment.scss';
import { Typography } from 'antd';
interface IComments {
  comment: string;
}
const { Text } = Typography;
const Comment: React.FC<IComments> = ({ comment }) => {
  return (
    <div className='mb-10'>
      <Text>{comment}</Text>
    </div>
  );
};

export default Comment;
