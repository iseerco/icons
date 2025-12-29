import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HardDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m1.095 15 1.049-10.498c.257-2.566 2.397-4.502 4.976-4.502h9.76c2.58 0 4.719 1.936 4.976 4.502l1.049 10.498zm21.905 2v2c0 2.757-2.243 5-5 5h-12c-2.757 0-5-2.243-5-5v-2zm-7 3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm4 0c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"/></svg>
);
