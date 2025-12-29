import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BankApp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,10v-.912c0-.657-.358-1.26-.934-1.573l-4.208-2.295c-.537-.293-1.179-.293-1.716,0l-4.208,2.295c-.576,.314-.934,.917-.934,1.574v.912h1v4h-1v2h12v-2h-1v-4h1Zm-9,0h2v4h-2v-4Zm6,4h-2v-4h2v4Zm-11,2H0V0H16V3.564l-4.021,2.194c-1.221,.664-1.979,1.94-1.979,3.33v6.912ZM0,21c0,1.654,1.346,3,3,3H13c1.654,0,3-1.346,3-3v-3H0v3Zm6-1h4v2H6v-2Z"/>
</svg>

);
