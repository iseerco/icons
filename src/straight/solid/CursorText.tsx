import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_14_text_cursor" data-name="14 text cursor"><path d="M16,2h3V0H16a4.982,4.982,0,0,0-4,2.031A4.982,4.982,0,0,0,8,0H5V2H8a3,3,0,0,1,3,3v9H7v2h4v3a3,3,0,0,1-3,3H5v2H8a4.982,4.982,0,0,0,4-2.031A4.982,4.982,0,0,0,16,24h3V22H16a3,3,0,0,1-3-3V16h4V14H13V5A3,3,0,0,1,16,2Z"/></g></svg>

);
