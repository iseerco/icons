import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H11c-.553,0-1,.448-1,1s.447,1,1,1h9c.179,0,.352,.024,.518,.068L.293,22.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L21.932,3.482c.044,.165,.068,.339,.068,.518V13c0,.552,.447,1,1,1s1-.448,1-1V4c0-2.206-1.794-4-4-4Z"/></svg>

);
