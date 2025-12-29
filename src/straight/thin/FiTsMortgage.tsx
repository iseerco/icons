import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMortgage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.968,7.866l-1.968-1.542V2h-1v3.541L13.658.572c-.976-.765-2.34-.765-3.317,0L1.032,7.866c-.656.514-1.032,1.287-1.032,2.121v14.013h24v-14.013c0-.834-.376-1.607-1.032-2.121Zm.032,15.134H1v-13.013c0-.524.236-1.01.649-1.333L10.958,1.359c.614-.48,1.47-.48,2.083,0l9.31,7.294c.413.323.649.809.649,1.333v13.013Zm-8-8c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Zm-4-7c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2,2-.897,2-2Zm-3,0c0-.551.449-1,1-1s1,.449,1,1-.449,1-1,1-1-.449-1-1Zm7.5-2l-5.833,10h-1.167l5.808-10h1.192Z"/>
</svg>

);
