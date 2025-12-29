import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceExpressionless = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0ZM5,10c0-.553,.448-1,1-1h3c.552,0,1,.447,1,1s-.448,1-1,1h-3c-.552,0-1-.447-1-1Zm12,7H7c-.552,0-1-.447-1-1s.448-1,1-1h10c.552,0,1,.447,1,1s-.448,1-1,1Zm1-6h-3c-.552,0-1-.447-1-1s.448-1,1-1h3c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
