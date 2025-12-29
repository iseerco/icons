import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLevelUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.464,5.287L13.655,.479c-.637-.637-1.674-.637-2.311,0L6.536,5.287l.707,.707L12,1.237V21.5c0,.827-.673,1.5-1.5,1.5H0v1H10.5c1.378,0,2.5-1.121,2.5-2.5V1.237l4.757,4.757,.707-.707Z"/></svg>

);
