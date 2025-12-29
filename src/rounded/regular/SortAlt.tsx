import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.293,17.707l-3.293,3.293V1c0-.553-.447-1-1-1s-1,.447-1,1V21l-3.293-3.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l4.293,4.293c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l4.293-4.293c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0ZM22.707,6.293c.391-.391,.391-1.023,0-1.414L18.414,.586C18.024,.196,17.512,0,17,0s-1.024,.195-1.414,.585l-4.293,4.293c-.391,.391-.391,1.023,0,1.414s1.023,.391,1.414,0l3.293-3.293V23c0,.553,.447,1,1,1s1-.447,1-1V3l3.293,3.293c.391,.391,1.023,.391,1.414,0Z"/></svg>

);
