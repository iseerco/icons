import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrH4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,4.5v15c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7.5H1v7.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5V4.5c0-.276.224-.5.5-.5s.5.224.5.5v6.5h10v-6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm11.5-.5c-.276,0-.5.224-.5.5v9.5h-5.833c-1.195,0-2.167-.972-2.167-2.167v-7.333c0-.276-.224-.5-.5-.5s-.5.224-.5.5v7.333c0,1.746,1.421,3.167,3.167,3.167h5.833v4.5c0,.276.224.5.5.5s.5-.224.5-.5V4.5c0-.276-.224-.5-.5-.5Z"/></svg>

);
