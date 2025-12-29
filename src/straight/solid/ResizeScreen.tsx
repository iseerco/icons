import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ResizeScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8 12h8c1.105 0 2-.895 2-2v-8c0-1.105-.895-2-2-2h-8c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2zm0-9.231c0-.425.344-.769.769-.769h4.231l-1.793 1.793 3 3 1.793-1.793v4.231c0 .425-.344.769-.769.769h-4.231l1.793-1.793-3-3-1.793 1.793zm16 17.231v-15c0-1.654-1.346-3-3-3h-1v8c0 2.206-1.794 4-4 4h-8c-2.206 0-4-1.794-4-4v-8h-1c-1.654 0-3 1.346-3 3v15h11v2h-5v2h12v-2h-5v-2z"/></svg>
);
