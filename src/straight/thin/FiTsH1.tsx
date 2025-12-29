import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsH1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,4h1v16h-1v-7.5H3v7.5h-1V4h1v7.5h10v-7.5Zm8.202,0l-3.56,3.651.716.697,2.642-2.709v14.36h1V4h-.798Z"/></svg>

);
