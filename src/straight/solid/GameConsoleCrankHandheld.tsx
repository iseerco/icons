import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GameConsoleCrankHandheld = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 9h-9v-2h9zm10-4v2h-1v7h-4v8h-19v-17c0-1.654 1.346-3 3-3h13c1.654 0 3 1.346 3 3v7h2v-7zm-16 10h-2v-2h-2v2h-2v2h2v2h2v-2h2zm9 1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-4 0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm3-11h-13v6h13z"/></svg>
);
