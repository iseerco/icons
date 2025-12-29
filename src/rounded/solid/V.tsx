import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const V = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24.011c-1.872,0-3.46-1.083-4.144-2.825L.069,1.365C-.133,.852,.12,.271,.634,.069c.514-.201,1.094,.051,1.296,.565l7.787,19.82c.451,1.146,1.475,1.556,2.283,1.556s1.832-.409,2.283-1.556L22.069,.635c.202-.515,.781-.767,1.296-.565,.514,.202,.767,.782,.565,1.296l-7.787,19.82c-.684,1.742-2.272,2.825-4.144,2.825Z"/></svg>

);
