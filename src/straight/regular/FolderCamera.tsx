import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,2H12.236L8.236,0H3C1.346,0,0,1.346,0,3V22H10v-2H2V8H22v4.051c.732,.082,1.417,.32,2,.711V5c0-1.654-1.346-3-3-3ZM2,6V3c0-.551,.449-1,1-1H7.764l4,2h9.236c.552,0,1,.449,1,1v1H2Zm18,13c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Zm1.5-5h-.464l-1.33-2h-3.412l-1.33,2h-.464c-1.379,0-2.5,1.122-2.5,2.5v7.5h12v-7.5c0-1.378-1.121-2.5-2.5-2.5Zm.5,8H14v-5.5c0-.276,.225-.5,.5-.5h7c.275,0,.5,.224,.5,.5v5.5Z"/>
</svg>

);
