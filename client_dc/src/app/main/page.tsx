import Button from '@/components/button';
import Tag from '@/components/tag';

export default function Main() {
  return (
    <div className='mx-auto w-[25rem]'>
      <Button title={'복원하기'} items='redMedium' icon='refresh' />
      <Tag title='#2024년' items='redSmall' />
      <Tag title='#2024년' items='redLarge' />
      /main 페이지
    </div>
  );
}
