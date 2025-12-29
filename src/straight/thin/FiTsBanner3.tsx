import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBanner3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.035,1.256L.068,10.611l4.688,3.141-2.755,4.448v3.808l7.627,1.908-4.022-3.427,5.395-2.953v-6.167l13,.657V-.029L1.035,1.256Zm3.755,18.539l-1.703-1.451,2.5-4.034,4.148,2.779-4.944,2.706Zm5.209-3.732l-7.657-5.131,7.657.387v4.744Zm13-5.089L1.15,9.87l.792-7.663,21.058-1.179v9.945Z"/>
</svg>

);
