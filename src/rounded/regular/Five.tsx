import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Five = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,24H5c-.553,0-1-.448-1-1s.447-1,1-1h7.5c1.5,0,2.902-.593,3.947-1.67s1.596-2.497,1.55-4c-.088-2.939-2.676-5.33-5.77-5.33H5c-.553,0-1-.448-1-1V4C4,1.794,5.794,0,8,0h10c.553,0,1,.448,1,1s-.447,1-1,1H8c-1.103,0-2,.897-2,2v5h6.228c4.164,0,7.649,3.262,7.77,7.271,.061,2.048-.689,3.984-2.114,5.452-1.426,1.469-3.337,2.277-5.383,2.277Z"/></svg>

);
