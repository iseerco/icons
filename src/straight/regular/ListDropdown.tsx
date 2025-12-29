import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListDropdown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3ZM3,2H21c.55,0,1,.45,1,1v5H2V3c0-.55,.45-1,1-1Zm-1,20V10H22v12H2Zm3-5h14v2H5v-2Zm0-4h14v2H5v-2ZM15.85,6.71l-2.76-2.71h6.91l-2.76,2.71c-.39,.39-1.01,.39-1.4,0Z"/></svg>

);
