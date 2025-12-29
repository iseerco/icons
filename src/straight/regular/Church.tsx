import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Church = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,5.991v-1.991h2v-2h-2V0h-2v2h-2v2h2v1.991L0,13.991v10.009h24v-10.009l-11-8ZM2,15.009l3-2.182v9.173h-3v-6.991Zm9,6.991v-4c0-.551.449-1,1-1s1,.449,1,1v4h-2Zm1-7c-1.654,0-3,1.346-3,3v4h-2v-10.627l5-3.636,5,3.636v10.627h-2v-4c0-1.654-1.346-3-3-3Zm10,7h-3v-9.173l3,2.182v6.991Z"/>
</svg>

);
