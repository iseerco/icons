import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLegalDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 21.001 8.001.006-.002 2.993h-10.999v-21c0-1.654 1.346-3 3-3h11.381l5.619 5.665v5.342h-3v-3.007h-5v-5h-9zm7.741-6.001h-5.741v3h4.812zm-5.741-4.993v3h6.379l.961-3zm17.5 4h-3.5v-1h-2v1h-3.5l-1.5 4.612v.333c0 1.134.919 2.054 2.054 2.054 1.057 0 1.928-.799 2.042-1.826h.013v-.575l-.93-2.599h1.821v6h-3v1.993h8s0-1.993 0-1.993h-3v-6h1.842l-.842 2.664v.336c0 1.104.895 2 2 2s2-.896 2-2v-.336l-1.5-4.664z"/></svg>
);
