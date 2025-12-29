import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainJourney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.473,8.543c-1.957-1.958-1.957-5.129-.008-7.079.943-.944,2.199-1.464,3.535-1.464s2.59.52,3.535,1.464h0c1.949,1.95,1.949,5.122,0,7.072l-3.535,3.458-3.527-3.45Zm4.527,5.457h-8c-1.103,0-2-.897-2-2s.897-2,2-2h2.102l-.027-.027c-.591-.591-1.054-1.26-1.391-1.973h-.683c-2.206,0-4,1.794-4,4s1.794,4,4,4h8c1.103,0,2,.897,2,2s-.897,2-2,2h-8v2h8c2.206,0,4-1.794,4-4s-1.794-4-4-4Zm-14.61,1h-.39v5h-2v-5H0v7h2v.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-.5h2v-2.188l-.884-2.266c-.604-1.547-2.066-2.546-3.727-2.546Z"/>
</svg>

);
