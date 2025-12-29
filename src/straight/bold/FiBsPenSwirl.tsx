import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPenSwirl = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.91,7.005c.7,1.522,1.09,3.214,1.09,4.995,0,4.411-3.589,8-8,8s-8-3.589-8-8h3c0,2.757,2.243,5,5,5s5-2.243,5-5c0-.933-.143-1.832-.407-2.679l2.317-2.317Zm-9.91,3.995h3.086l7.275-7.275c.852-.852.852-2.234,0-3.086s-2.234-.852-3.086,0l-7.275,7.275v3.086Zm-10,1C3,7.037,7.038,3,12,3c.932,0,1.832.143,2.679.407l2.317-2.317c-1.522-.7-3.214-1.09-4.995-1.09C5.383,0,0,5.383,0,12c0,4.938,2.65,9.244,7.271,11.812l1.457-2.623c-3.641-2.022-5.729-5.371-5.729-9.188Z"/>
</svg>

);
