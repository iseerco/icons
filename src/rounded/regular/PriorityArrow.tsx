import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PriorityArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,9h-2c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm0,4h-2v-2h2v2Zm0-12h-2c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm0,4h-2v-2h2v2Zm0,12h-2c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm0,4h-2v-2h2v2Zm-6-1c0,.553-.448,1-1,1h-6C4.038,21,0,16.963,0,12S4.038,3,9,3h4.011l-1.268-1.3c-.387-.394-.381-1.027.014-1.414.394-.387,1.027-.381,1.414.014l2.25,2.293c.773.773.773,2.042-.007,2.821l-2.243,2.286c-.196.2-.455.3-.714.3-.253,0-.506-.095-.7-.286-.395-.387-.4-1.02-.014-1.414l1.275-1.3h-4.019c-3.86,0-7,3.14-7,7s3.14,7,7,7h6c.552,0,1,.447,1,1Z"/>
</svg>

);
