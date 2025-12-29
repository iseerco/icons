import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.813,7.635L13.908.658c-1.125-.881-2.691-.881-3.816,0L1.187,7.635c-.754.592-1.187,1.48-1.187,2.439v13.926h24v-13.926c0-.959-.433-1.848-1.187-2.439Zm-6.813,14.365h-8v-3c0-.552.448-1,1-1h6c.552,0,1,.448,1,1v3Zm6,0h-4v-3c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v3H2v-11.926c0-.34.153-.655.42-.865L11.326,2.232c.396-.311.951-.311,1.348,0l8.905,6.977c.268.21.421.525.421.865v11.926ZM12,7c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/>
</svg>

);
