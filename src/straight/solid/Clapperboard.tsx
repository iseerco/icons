import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clapperboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9v14H0v-14h24ZM1.496,7h3.403L10.898,1h-3.403L1.496,7ZM17.148,1h-3.422l-6,6h3.422l6-6Zm-3.172,6h3.422l5.4-5.4c-.501-.377-1.124-.6-1.798-.6h-1.023l-6,6Zm6.25,0h3.773v-3c0-.238-.029-.47-.081-.692l-3.692,3.692ZM4.667,1h-1.667C1.346,1,0,2.346,0,4v1.667L4.667,1Z"/>
</svg>

);
