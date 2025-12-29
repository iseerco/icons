import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsDownCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,22H24v2H0v-2Zm12-1.943s.002,0,.004,0c7.313-.002,11.821-5.245,12.01-5.469l-1.528-1.289c-.04,.047-4.088,4.757-10.483,4.758-6.364,0-10.449-4.713-10.488-4.759L-.014,14.589c.189,.223,4.701,5.466,12.014,5.468Zm.002-5.056c.482,0,.935-.188,1.275-.528l2.682-2.682-1.414-1.414-1.544,1.544-.002-5.921h-2s.002,5.92,.002,5.92l-1.542-1.542-1.414,1.414,2.681,2.682c.341,.341,.794,.528,1.276,.528ZM19,3.08v5.92h2V3.08l1.543,1.543,1.414-1.414-2.682-2.683c-.703-.702-1.847-.702-2.55,0l-2.682,2.682,1.414,1.414,1.543-1.543ZM3,3.08v5.92h2V3.08l1.543,1.543,1.414-1.414L5.275,.526c-.703-.702-1.847-.702-2.55,0L.043,3.209l1.414,1.414,1.543-1.543Z"/>
</svg>

);
