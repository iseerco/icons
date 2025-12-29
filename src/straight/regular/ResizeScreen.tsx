import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ResizeScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.207 7.793 1.793-1.793v4.231c0 .425-.344.769-.769.769h-4.231l1.793-1.793-3-3-1.793 1.793v-4.231c0-.425.344-.769.769-.769h4.231l-1.793 1.793zm9.793 12.207v-15c0-1.654-1.346-3-3-3v2c.551 0 1 .448 1 1v13h-20v-13c0-.552.449-1 1-1v-2c-1.654 0-3 1.346-3 3v15h11v2h-5v2h12v-2h-5v-2zm-19-8v-10c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2h-10c-1.103 0-2-.897-2-2zm2 0h10.001v-10h-10.001z"/></svg>
);
