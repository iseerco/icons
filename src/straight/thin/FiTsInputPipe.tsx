import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsInputPipe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,7h1v10h-1V7Zm19-1.5v15.5H0V5.5c0-1.379,1.122-2.5,2.5-2.5h19c1.378,0,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22V5.5Z"/></svg>

);
