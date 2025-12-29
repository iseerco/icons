import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DumbbellHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,11h-1V6c0-1.654-1.346-3-3-3s-3,1.346-3,3v5H8V6c0-1.654-1.346-3-3-3s-3,1.346-3,3v5H1c-.552,0-1,.448-1,1s.448,1,1,1h1v5c0,1.654,1.346,3,3,3s3-1.346,3-3v-5h8v5c0,1.654,1.346,3,3,3s3-1.346,3-3v-5h1c.552,0,1-.448,1-1s-.448-1-1-1ZM6,18c0,.552-.449,1-1,1s-1-.448-1-1V6c0-.551,.449-1,1-1s1,.449,1,1v12Zm14,0c0,.552-.449,1-1,1s-1-.448-1-1V6c0-.551,.449-1,1-1s1,.449,1,1v12Z"/>
</svg>

);
