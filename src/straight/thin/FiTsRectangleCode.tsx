import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRectangleCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V4.5c0-1.378,1.122-2.5,2.5-2.5H21.5c1.379,0,2.5,1.122,2.5,2.5V22ZM1,21H23V4.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V21Zm8.896-4.896l-3.75-3.75c-.195-.195-.195-.512,0-.707l3.75-3.75-.707-.707-3.75,3.75c-.585,.585-.585,1.536,0,2.121l3.75,3.75,.707-.707Zm8.664-3.043c.585-.585,.585-1.536,0-2.121l-3.75-3.75-.707,.707,3.75,3.75c.195,.195,.195,.512,0,.707l-3.75,3.75,.707,.707,3.75-3.75Z"/></svg>

);
