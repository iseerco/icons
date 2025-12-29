import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,16c0,.553-.447,1-1,1H10c-.553,0-1-.447-1-1s.447-1,1-1h13c.553,0,1,.447,1,1Zm-14-4h10c.553,0,1-.447,1-1s-.447-1-1-1H10c-.553,0-1,.447-1,1s.447,1,1,1Zm0-5h7c.553,0,1-.447,1-1s-.447-1-1-1h-7c-.553,0-1,.447-1,1s.447,1,1,1Zm0-5h4c.553,0,1-.447,1-1s-.447-1-1-1h-4c-.553,0-1,.447-1,1s.447,1,1,1Zm-.879,17.293c-.391-.391-1.023-.391-1.414,0l-1.707,1.707V1c0-.553-.447-1-1-1s-1,.447-1,1V21l-1.707-1.707c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l2.707,2.707c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l2.707-2.707c.391-.391,.391-1.023,0-1.414Z"/></svg>

);
