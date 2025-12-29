import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InboxOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15v4c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-4c0-1.654,1.346-3,3-3h3c1.103,0,2,.897,2,2s.897,2,2,2h4c1.103,0,2-.897,2-2s.897-2,2-2h3c1.654,0,3,1.346,3,3ZM8.707,5.293l2.293-2.293v7c0,.553,.447,1,1,1s1-.447,1-1V3l2.293,2.293c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414L13.414,.586C13.028,.2,12.521,.006,12.014,.003l-.014-.003-.014,.003c-.508,.003-1.014,.197-1.4,.583l-3.293,3.293c-.391,.391-.391,1.023,0,1.414s1.023,.391,1.414,0Z"/></svg>

);
