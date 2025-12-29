import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWrenchSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,24h-3v-4.989l1.105-.302c3.471-.945,5.895-4.116,5.895-7.709,0-2.895-1.573-5.516-4-6.919v6.919H8V4.081c-2.427,1.403-4,4.024-4,6.919,0,3.593,2.424,6.764,5.895,7.709l1.105,.302v4.989h-3v-2.762C3.826,19.608,1,15.552,1,11,1,6.058,4.333,1.697,9.105,.396L11-.12V8h2V-.12l1.895,.517c4.772,1.301,8.105,5.661,8.105,10.604,0,4.552-2.826,8.608-7,10.238v2.762Z"/></svg>

);
