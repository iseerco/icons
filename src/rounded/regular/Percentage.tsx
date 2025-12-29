import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Percentage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,24c-.256,0-.512-.098-.707-.293-.391-.391-.391-1.023,0-1.414L22.293,.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414L1.707,23.707c-.195,.195-.451,.293-.707,.293ZM9,5c0-2.206-1.794-4-4-4S1,2.794,1,5s1.794,4,4,4,4-1.794,4-4Zm-2,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm16,14c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Zm-2,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Z"/></svg>

);
