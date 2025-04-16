import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

export default function Loader({
  children,
  fullScreen,
}: {
  children?: React.ReactNode;
  fullScreen?: boolean;
}) {
  if (fullScreen) {
    return (
      <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center">
        <Ring size={32} speed={1.5} bgOpacity={0.25} />
        {children}
      </div>
    );
  }
  if (!children) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Ring size={32} speed={1.5} bgOpacity={0.25} />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="bg-background/60 absolute inset-0 z-10 flex items-center justify-center">
        <Ring size={32} speed={1.5} bgOpacity={0.25} />
      </div>
      <div className="opacity-50">{children}</div>
    </div>
  );
}
