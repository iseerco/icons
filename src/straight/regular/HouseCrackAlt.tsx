import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseCrackAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.813,7.635L13.908.659c-1.125-.881-2.692-.88-3.816,0L1.188,7.635c-.755.591-1.188,1.48-1.188,2.439v13.926h24v-13.926c0-.958-.433-1.847-1.187-2.439Zm-.813,14.365h-6.086l-4.5-4.5,3.75-3.75-4.457-4.457-1.414,1.414,3.043,3.043-3.75,3.75,4.5,4.5H2v-11.926c0-.34.153-.655.421-.865L11.326,2.233c.397-.312.951-.311,1.349,0l8.905,6.977c.264.207.421.53.421.865v11.926Z"/>
</svg>

);
