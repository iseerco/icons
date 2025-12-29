import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileZipper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414,5h-4.414V.586l4.414,4.414Zm-6.414,2V0h-6v2h-2V0h-2c-1.657,0-3,1.343-3,3v21h20V7h-7ZM7,3h2v2h-2v-2Zm0,3h2v2h-2v-2Zm0,3h2v2h-2v-2Zm3,9h-4v-1l1-5h2l1,5v1Z"/></svg>

);
