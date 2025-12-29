import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrExpandArrowsAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.329,16.586,20.518,18.4l-6.4-6.4,6.4-6.4,1.811,1.811A.979.979,0,0,0,24,6.728l.037-5.635A1.086,1.086,0,0,0,22.944,0L17.308.037a.978.978,0,0,0-.685,1.67L18.4,3.482,12,9.879l-6.4-6.4L7.414,1.671A.979.979,0,0,0,6.728,0L1.093-.037A1.086,1.086,0,0,0,0,1.056L.037,6.692a.978.978,0,0,0,1.67.685L3.482,5.6l6.4,6.4-6.4,6.4L1.707,16.623a.978.978,0,0,0-1.67.685L0,22.944a1.086,1.086,0,0,0,1.093,1.093L6.728,24a.979.979,0,0,0,.686-1.671L5.6,20.518l6.4-6.4,6.4,6.4-1.774,1.775a.978.978,0,0,0,.685,1.67L22.944,24a1.086,1.086,0,0,0,1.093-1.093L24,17.272A.979.979,0,0,0,22.329,16.586Z"/></svg>

);
