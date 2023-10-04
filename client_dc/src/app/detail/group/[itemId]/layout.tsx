import { TopTitle } from './_components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopTitle />
      {children}
    </div>
  );
}