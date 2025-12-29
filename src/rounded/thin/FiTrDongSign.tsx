import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrDongSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23.5c0,.28-.22,.5-.5,.5H2.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H21.5c.28,0,.5,.22,.5,.5ZM5,14c0-3.31,2.69-6,6-6,2.08,0,3.92,1.07,5,2.69V4h-4.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h4.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3h2.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-2.5v15.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-2.19c-1.08,1.62-2.92,2.69-5,2.69-3.31,0-6-2.69-6-6Zm1,0c0,2.76,2.24,5,5,5s5-2.24,5-5-2.24-5-5-5-5,2.24-5,5Z"/></svg>

);
