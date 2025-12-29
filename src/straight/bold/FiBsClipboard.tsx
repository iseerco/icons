import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClipboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,2h-2.171c-.412-1.165-1.523-2-2.829-2h-3c-1.306,0-2.417.835-2.829,2h-2.171c-1.93,0-3.5,1.57-3.5,3.5v18.5h20V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,19H5V5.5c0-.276.225-.5.5-.5h2.171c.412,1.165,1.523,2,2.829,2h3c1.306,0,2.417-.835,2.829-2h2.171c.275,0,.5.224.5.5v15.5Z"/></svg>

);
