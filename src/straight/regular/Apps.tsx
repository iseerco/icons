import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Apps = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M11,11H0V3A3,3,0,0,1,3,0h8ZM2,9H9V2H3A1,1,0,0,0,2,3Z"/><path d="M24,11H13V0h8a3,3,0,0,1,3,3ZM15,9h7V3a1,1,0,0,0-1-1H15Z"/><path d="M11,24H3a3,3,0,0,1-3-3V13H11ZM2,15v6a1,1,0,0,0,1,1H9V15Z"/><path d="M21,24H13V13H24v8A3,3,0,0,1,21,24Zm-6-2h6a1,1,0,0,0,1-1V15H15Z"/></g></svg>

);
