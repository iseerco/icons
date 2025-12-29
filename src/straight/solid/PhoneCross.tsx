import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhoneCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.579,8.961,19.517,5.909l-3.05,3.058L15.045,7.562,18.1,4.5,15.039,1.442,16.453.028c.227.227,1.531,1.528,3.06,3.052L22.564.021l1.414,1.415L20.929,4.492l3.056,3.047Zm-9.078,8a12.136,12.136,0,0,1-6.452-6.467l4.125-4.126L4.908.1l-3.17,3.17A5.892,5.892,0,0,0,.022,7.479c0,7.248,9.252,16.5,16.5,16.5a5.9,5.9,0,0,0,4.207-1.716L23.9,19.092l-6.264-6.266Z"/></svg>

);
