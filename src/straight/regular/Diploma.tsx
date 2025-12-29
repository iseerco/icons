import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Diploma = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 12h5v2h-5zm10-4h-10v2h10zm0-4h-10v2h10zm3 15.444v4.556l-2-2-2 2v-4.556a3.987 3.987 0 0 1 2-7.444 3.939 3.939 0 0 1 1 .142v-9.142a1 1 0 0 0 -1-1h-12a1 1 0 0 0 -1 1v17h9v2h-11v-19a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10.382a3.95 3.95 0 0 1 -1 6.062zm0-3.444a2 2 0 1 0 -2 2 2 2 0 0 0 2-2z"/></svg>
);
