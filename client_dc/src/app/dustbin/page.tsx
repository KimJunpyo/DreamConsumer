import { DeleteAll, Warn, Toolbar, Buttons, Items } from './_components';

export default function Dustbin() {
  return (
    <div className='m-auto relative'>
      <div className='mb-20'>
        <DeleteAll />
        <Warn />
        <Toolbar />
        <Items />
      </div>
      <Buttons />
    </div>
  );
}
