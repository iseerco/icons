import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,23H5.33c1.067-.937,1.67-2.494,1.67-4.5v-5.5h8.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H7v-4.5c0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5c0,.276.224.5.5.5s.5-.224.5-.5c0-4.136-3.364-7.5-7.5-7.5s-7.5,3.364-7.5,7.5v4.5h-2.5c-.276,0-.5.224-.5.5s.224.5.5.5h2.5v5.5c0,1.056-.252,4.5-3.5,4.5-.276,0-.5.224-.5.5s.224.5.5.5h18c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z"/>
</svg>

);
