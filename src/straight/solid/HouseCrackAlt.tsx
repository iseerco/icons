import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseCrackAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.813,7.635L13.908.659c-1.125-.881-2.692-.88-3.816,0L1.188,7.635c-.755.591-1.188,1.48-1.188,2.439v13.926h14.086l-5.5-5.5,4.043-4.043-3.543-3.543,1.414-1.414,4.957,4.957-4.043,4.043,5.5,5.5h7.086v-13.926c0-.958-.433-1.847-1.187-2.439Z"/>
</svg>

);
