import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignPostsWrench = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,20.288v3.712h-3v-3.712c-2.307-.654-4-2.771-4-5.288,0-2.331,1.453-4.319,3.5-5.119v3.119c0,1.105.895,2,2,2s2-.895,2-2v-3.119c2.047.801,3.5,2.788,3.5,5.119,0,2.517-1.693,4.634-4,5.288Zm-9-5.288c0-4.142,3.358-7.5,7.5-7.5,2.207,0,4.185.959,5.558,2.477v-4.977c0-1.654-1.346-3-3-3V0h-2v2H5.058V0h-2v2C1.403,2,.058,3.346.058,5v13h3v6h2v-6h6.571c-.402-.919-.628-1.933-.628-3Z"/>
</svg>

);
