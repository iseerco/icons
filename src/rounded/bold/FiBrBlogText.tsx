import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBlogText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.47,2,0,4.47,0,7.5v9c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V7.5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,14.5c0,1.38-1.12,2.5-2.5,2.5H5.5c-1.38,0-2.5-1.12-2.5-2.5V7.5c0-.17,.02-.34,.05-.5H20.95c.03,.16,.05,.33,.05,.5v9Zm-9-6c0,.83-.67,1.5-1.5,1.5h-.5v3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-3.5h-.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h4c.83,0,1.5,.67,1.5,1.5Zm7,0c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5Zm0,5c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
