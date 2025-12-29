import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10.074v13.926h-7v-6.947l6.915-3.494-6.021-4.347c-.626-.312-1.353-.279-1.946.087-.594.367-.948,1.003-.948,1.702v12.999H0v-13.926c0-.958.433-1.847,1.187-2.439L10.092.659c1.123-.881,2.693-.881,3.816,0l8.905,6.977c.754.592,1.187,1.48,1.187,2.439Zm-6.996.962v3.775s3.075-1.554,3.075-1.554l-3.075-2.22"/>
</svg>

);
