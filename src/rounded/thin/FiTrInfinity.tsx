import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrInfinity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.272,6c-3.349,0-5.41,3.129-6.272,4.802-.863-1.673-2.923-4.802-6.272-4.802-3.158,0-5.728,2.691-5.728,6s2.569,6,5.728,6c3.349,0,5.41-3.129,6.272-4.802.863,1.673,2.923,4.802,6.272,4.802,3.158,0,5.728-2.691,5.728-6s-2.569-6-5.728-6Zm-12.545,11c-2.606,0-4.728-2.243-4.728-5s2.121-5,4.728-5c3.379,0,5.337,4.089,5.731,5-.395.911-2.353,5-5.731,5Zm12.545,0c-3.379,0-5.337-4.089-5.731-5,.395-.911,2.353-5,5.731-5,2.606,0,4.728,2.243,4.728,5s-2.121,5-4.728,5Z"/>
</svg>

);
