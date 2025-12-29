import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const A = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.931,22.634L16.144,2.814C15.46,1.072,13.872-.01,12-.01s-3.46,1.082-4.144,2.824L.069,22.634c-.202,.514,.051,1.095,.565,1.296,.515,.203,1.095-.051,1.296-.565l2.501-6.366h15.137l2.501,6.366c.155,.394,.532,.635,.931,.635,.122,0,.245-.022,.365-.07,.514-.202,.767-.782,.565-1.296ZM5.217,15L9.717,3.545c.451-1.147,1.475-1.556,2.283-1.556s1.832,.409,2.283,1.556l4.5,11.455H5.217Z"/></svg>

);
