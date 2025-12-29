import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSuperscript = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.717,6l-6.559,9,6.559,9h-1.242l-5.937-8.155L1.496,24H.256l6.661-9L.256,6h1.239l6.043,8.154,5.937-8.154h1.242ZM23.201,0l-2.836,2.928.719.695,1.916-1.978v9.354h1V0h-.799Z"/></svg>

);
