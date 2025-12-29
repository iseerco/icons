import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mobile5g = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M3.999,18.008v3c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3v-3H3.999Zm10,4h-4v-2h4v2Zm7.501-10.508h2.5v2c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5v-3c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5h-1.6c0-.496-.404-.9-.9-.9s-.9,.404-.9,.9v3c0,.496,.404,.9,.9,.9s.9-.404,.9-.9v-.4h-.9v-1.6Zm-3.538,2.038c0,1.381-1.119,2.5-2.5,2.5h-2.5v-1.6h2.5c.496,0,.9-.404,.9-.9s-.404-.9-.9-.9h-2.5v-4.6h4.5v1.6h-2.9v1.4h.9c1.381,0,2.5,1.119,2.5,2.5Zm-6.962,2.462l-7.001,.008V.008H19.999V6l-8.999-.008v10.008Z"/>
</svg>

);
