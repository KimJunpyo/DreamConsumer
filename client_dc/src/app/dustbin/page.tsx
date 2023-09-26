import { DeleteAll, Warn, Toolbar } from './_components';

export default function Dustbin() {
  return (
    <div className='m-auto'>
      <DeleteAll />
      <Warn />
      <Toolbar />
    </div>
  );
}
