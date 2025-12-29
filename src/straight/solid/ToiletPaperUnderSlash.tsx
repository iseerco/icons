import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToiletPaperUnderSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.952,22.538l-1.414,1.414L.018,1.432,1.432.018l1.051,1.051c.735-.689,1.593-1.069,2.517-1.069h10.868c-1.273,2.009-1.868,5.262-1.868,8.5,0,1.542.135,3.087.414,4.5l5.771,5.771c.707-.287,1.311-.832,1.814-1.566v2.794c0,.258.051.503.142.728l1.81,1.81Zm-7.952-14.038c0-4.694,1.343-8.5,3-8.5s3,3.806,3,8.5-1.343,8.5-3,8.5-3-3.806-3-8.5Zm2,0c0,1.105.448,2,1,2s1-.895,1-2-.448-2-1-2-1,.895-1,2ZM.48,4.702c-.309,1.12-.48,2.4-.48,3.798,0,5,2.196,8.5,5,8.5h7.778L.48,4.702Zm7.52,14.298v2c0,1.657,1.343,3,3,3h8.778l-5-5h-6.778Z"/>
</svg>

);
