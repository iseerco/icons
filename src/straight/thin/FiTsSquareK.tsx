import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareK = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,4l-5.319,7.524,5.319,8.476h-1.16l-5.026-8h-6.314v8h-1V4h1v7h6.354l4.956-7h1.189Zm5.5-1.5v21.5H0V2.5C0,1.122,1.121,0,2.5,0h19c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h22V2.5Z"/></svg>

);
