import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMandolin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,6l2.001-2.819L20.819-.001l-2.819,2.001-.235,2.114-1.886,1.886h-6.879C4.038,6,0,10.037,0,15c0,2.404.936,4.664,2.637,6.365,1.7,1.699,3.96,2.635,6.363,2.635,4.962,0,9-4.037,9-9v-6.879l1.886-1.886,2.114-.235Zm-7,9c0,3.309-2.691,6-6,6-1.602,0-3.109-.624-4.243-1.757-1.133-1.134-1.757-2.641-1.757-4.243,0-3.309,2.691-6,6-6h3.879l-3.102,3.102c-.248-.066-.508-.102-.777-.102-1.657,0-3,1.343-3,3s1.343,3,3,3,3-1.343,3-3c0-.269-.036-.529-.102-.777l3.102-3.102v3.879Z"/>
</svg>

);
