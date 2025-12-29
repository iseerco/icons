import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gem = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.406,7.228A3.009,3.009,0,0,0,18.986,6H5.014a3.009,3.009,0,0,0-2.42,1.228L.547,10.021a2.992,2.992,0,0,0,.344,3.936L12,23.931,23.146,13.923a2.982,2.982,0,0,0,.307-3.9ZM7.309,13l2.305,6.1L2.816,13Zm7.244,0L12,19.757,9.447,13ZM9.477,11l1.2-3h2.646l1.2,3Zm7.214,2h4.491l-6.8,6.1Zm3.1-4.591L21.692,11H16.677l-1.2-3h3.509A1,1,0,0,1,19.793,8.409Zm-15.586,0A1,1,0,0,1,5.014,8H8.523l-1.2,3H2.308Z"/><rect x="11" width="2" height="4"/><rect x="16.138" y="1.686" width="3.724" height="2" transform="matrix(0.537, -0.844, 0.844, 0.537, 6.068, 16.428)"/><rect x="5" y="0.824" width="2" height="3.724" transform="translate(-0.504 3.642) rotate(-32.48)"/></svg>

);
