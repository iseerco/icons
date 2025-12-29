import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClawMarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.887,23.061c.387.593-.366,1.258-.881.772C14.995,16.284,7.391,8.658.166.998-.319.483.342-.277.931.116c6.569,4.384,16.069,12.384,22.956,22.945Zm-.95-10.229c.555.479,1.355-.192.957-.808C19.841,5.753,15.033,2.029,11.959.102c-.618-.388-1.266.408-.789.96,3.83,4.438,7.33,7.938,11.767,11.77ZM.872,9.046c-.566-.336-1.162.402-.715.885,4.434,4.793,9.078,9.426,13.911,13.912.488.453,1.225-.164.878-.732C10.341,15.576,5,11.5.872,9.046Z"/></svg>

);
