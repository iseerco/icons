import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramSankey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,0V2H15.83c-.26,0-.52,.11-.71,.29l-4.71,4.71H0v-2H9.59L13.71,.88c.57-.57,1.32-.88,2.12-.88h8.17ZM12.12,21.71l-6.71-6.71H0v2H4.59l6.12,6.12c.57,.57,1.32,.88,2.12,.88h11.17v-2H12.83c-.26,0-.52-.11-.71-.29ZM0,10v2H9.59l5.12,5.12c.57,.57,1.32,.88,2.12,.88h7.17v-2h-7.17c-.26,0-.52-.11-.71-.29l-3.71-3.71h11.59v-2H0Z"/></svg>

);
