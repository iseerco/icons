import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Memo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3Zm1,22H5V3c0-.552.448-1,1-1h12c.552,0,1,.448,1,1v19ZM7,5h10v2H7v-2Zm0,5h10v2H7v-2Zm0,5h5v2h-5v-2Z"/></svg>

);
