import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.707,22.293L3.482,2.068c.165-.044,.339-.068,.518-.068H13c.552,0,1-.448,1-1s-.448-1-1-1H4C1.794,0,0,1.794,0,4V13c0,.552,.448,1,1,1s1-.448,1-1V4c0-.179,.024-.352,.068-.518L22.293,23.707c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414Z"/></svg>

);
