import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JournalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,22l-2,2-2-2V2c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2v20ZM18,2v19c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3V2h2V0h2v2h2V0h2v2h2V0h2v2h2V0h2v2h2Zm-8,13h-6v2h6v-2Zm4-4H4v2h10v-2Zm0-4H4v2h10v-2Z"/>
</svg>

);
