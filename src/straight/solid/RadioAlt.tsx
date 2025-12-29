import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RadioAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,18c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm5-8v-1c0-1.654-1.346-3-3-3h-11.956L21.313,1.95l-.627-1.899L2.514,6.049c-1.423.234-2.514,1.463-2.514,2.951v1h24Zm0,2v12H0v-12h24Zm-14,7H3v2h7v-2Zm0-4H3v2h7v-2Zm11,3c0-2.205-1.795-4-4-4s-4,1.795-4,4,1.795,4,4,4,4-1.795,4-4Z"/>
</svg>

);
