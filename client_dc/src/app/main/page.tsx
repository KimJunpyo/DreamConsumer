import { Button, Tag } from '@/components';
import Search from './_components/Search';

export default function Main() {
  return (
    <div className=''>
      <Search />
      <Button width={32} height={9} font='nb' fontSize={'xl'} icon='delete'>
        테스트
      </Button>
      /main 페이지
    </div>
  );
}
