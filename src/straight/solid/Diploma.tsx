import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Diploma = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 20.444v3.556l-2-2-2 2v-3.556a4 4 0 1 1 4 0zm-6 1.019v.537h-11v-19a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8.809a5.993 5.993 0 0 0 -7 9.654zm-7-15.463h10v-2h-10zm0 4h10v-2h-10zm0 4h5v-2h-5z"/></svg>
);
