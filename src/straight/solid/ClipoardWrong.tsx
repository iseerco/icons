import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipoardWrong = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.414,5h-4.414V.586l4.414,4.414Zm-6.414,2V0H5c-1.657,0-3,1.343-3,3V24H22V7h-7Zm1.207,11.293l-1.414,1.414-2.793-2.793-2.793,2.793-1.414-1.414,2.793-2.793-2.793-2.793,1.414-1.414,2.793,2.793,2.793-2.793,1.414,1.414-2.793,2.793,2.793,2.793Z"/>
</svg>

);
