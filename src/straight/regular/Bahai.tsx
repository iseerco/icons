import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bahai = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.179,23.77l-4.17-3.33-4.171,3.33-1.055-5.231-5.335-.131,2.555-4.686L-.002,10.192l4.97-1.947-.798-5.276,5.059,1.701L12.009,.115l2.78,4.555,5.059-1.701-.798,5.276,4.97,1.947-4.004,3.529,2.555,4.686-5.335,.131-1.055,5.231Zm-11.408-7.282l3.656,.09,.723,3.585,2.858-2.281,2.858,2.281,.723-3.585,3.656-.09-1.751-3.211,2.743-2.418-3.404-1.334,.546-3.616-3.466,1.166-1.905-3.121-1.906,3.121-3.466-1.166,.546,3.616-3.404,1.334,2.743,2.418-1.751,3.211Z"/></svg>

);
