import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandBackFist = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,0c-2.206,0-4,1.794-4,4v.937l-3.975,3.975c-1.365,1.365-1.365,3.585,.022,4.972l3.952,3.791v6.326h15v-5.711l1.606-4.016c.261-.652,.394-1.34,.394-2.044V2.181S11.448,0,10,0Zm10,12.229c0,.32-.06,.632-.179,.929l-1.821,4.553v3.289H9v-4.605l-4.854-4.655c-.195-.195-.195-.512,0-.708l1.854-1.854v1.821h3V4c0-.551,.448-1,1-1,.714,0,5.437,.812,10,1.667v7.563Z"/></svg>

);
