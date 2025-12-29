import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceExpressionless = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10ZM6,11c-.552,0-1-.447-1-1s.448-1,1-1h3c.552,0,1,.447,1,1s-.448,1-1,1h-3Zm13-1c0,.553-.448,1-1,1h-3c-.552,0-1-.447-1-1s.448-1,1-1h3c.552,0,1,.447,1,1Zm-1,6c0,.553-.448,1-1,1H7c-.552,0-1-.447-1-1s.448-1,1-1h10c.552,0,1,.447,1,1Z"/></svg>

);
