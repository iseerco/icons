import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414,5h-4.414V.586l4.414,4.414Zm-6.414,2V0H5c-1.657,0-3,1.343-3,3v21h20V7h-7Zm1,9h-8v-2h8v2Z"/></svg>

);
