import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlogPencil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.4,13.17c-.74-.74-1.73-1.15-2.77-1.15h-1.63v1.63c0,1.04,.41,2.04,1.15,2.77l6.84,6.84c.85,.85,2.24,1.01,3.17,.25,1.07-.88,1.13-2.46,.18-3.41l-6.93-6.93ZM.1,6C.57,3.72,2.59,2,5,2h14c2.41,0,4.43,1.72,4.9,4H.1Zm23.9,2v9c0,.3-.03,.59-.08,.87l-6.11-6.11c-1.11-1.11-2.62-1.73-4.19-1.73h-2.62c-.55,0-1,.45-1,1v2.63c0,1.57,.62,3.08,1.73,4.19l4.16,4.16H5c-2.76,0-5-2.24-5-5V8H24Z"/></svg>

);
