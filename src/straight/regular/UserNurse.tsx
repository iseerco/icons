import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserNurse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,15c3.309,0,6-2.691,6-6V0H6v9c0,3.309,2.691,6,6,6Zm4-6c0,2.206-1.794,4-4,4s-4-1.794-4-4c0-.341.042-.676.126-1h7.748c.083.324.126.659.126,1Zm0-3h-3v-1h1v-2h-1v-1h3v4ZM8,2h3v1h-1v2h1v1h-3V2Zm12.979,20v2h-2v-2c0-1.51-1.12-2.762-2.573-2.97l-4.403,5.022-4.427-5.022c-1.454.207-2.575,1.46-2.575,2.97v2h-2v-2c0-2.757,2.243-5,5-5h.451l3.547,4.023,3.527-4.023h.453c2.757,0,5,2.243,5,5Z"/></svg>

);
