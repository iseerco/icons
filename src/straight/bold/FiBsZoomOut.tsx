import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsZoomOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<rect x="128" y="192" width="192" height="64"/>
<path d="M403.494,358.373c74.08-99,53.879-239.309-45.121-313.389S119.064-8.895,44.984,90.105S-8.895,329.414,90.105,403.494  c79.523,59.506,188.745,59.506,268.268,0l108.341,108.341l45.121-45.036L403.494,358.373z M225.049,384.375  c-87.993,0-159.326-71.333-159.326-159.326S137.056,65.723,225.049,65.723s159.326,71.333,159.326,159.326  C384.293,313.008,313.008,384.293,225.049,384.375z"/>
</svg>

);
