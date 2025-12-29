import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const File = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M14.414,0H5A3,3,0,0,0,2,3V24H22V7.586ZM15,3.414,18.586,7H15ZM4,22V3A1,1,0,0,1,5,2h8V9h7V22Z"/></g></svg>

);
