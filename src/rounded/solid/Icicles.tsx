import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icicles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,24h-.024c-.468-.012-.864-.346-.956-.804l-2.02-13.696-1.02,8.696c-.096.479-.538.831-1.013.803-.488-.016-.894-.382-.959-.866L.043,3.473c-.155-.822.076-1.714.644-2.397S2.089,0,2.977,0h18.047c.882,0,1.712.387,2.279,1.062.566.675.804,1.56.652,2.428l-2.972,18.209c-.077.474-.479.825-.959.839-.514-.008-.901-.316-1.005-.784l-2.02-12.253-1.533,7.87c-.114.82-.506,1.125-.956,1.13-.473-.017-.849-.292-.973-.725l-1.538-8.275-3.03,13.744c-.112.445-.513.756-.97.756Z"/>
</svg>

);
