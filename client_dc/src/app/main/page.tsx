import { Button, Tag } from '@/components';

export default function Main() {
  return (
    <div className=''>
      <Button title={'복원하기'} items='redMedium' icon='refresh' />
      <Button title={'삭제하기'} items='redLarge' icon='delete' />
      <Button title={'삭제하기'} items='redLarge' icon='delete' />
      <Button title={'로그인'} items='redLarge' />
      <Tag title='#2024년' items='redSmall' />
      <Tag title='#2024년' items='redLarge' />
      /main 페이지
    </div>
  );
}
