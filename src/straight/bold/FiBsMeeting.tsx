import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMeeting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,22v2H0v-2c0-1.105.895-2,2-2h4c1.105,0,2,.895,2,2Zm-4-4c1.657,0,3-1.343,3-3s-1.343-3-3-3-3,1.343-3,3,1.343,3,3,3Zm18,2h-4c-1.105,0-2,.895-2,2v2h8v-2c0-1.105-.895-2-2-2Zm-5-5c0,1.657,1.343,3,3,3s3-1.343,3-3-1.343-3-3-3-3,1.343-3,3Zm2-4h-3.934l-1.737,1.502c-.374.332-.848.499-1.324.499-.48,0-.964-.17-1.35-.513l-1.689-1.489h-3.966V2.548c0-1.405,1.143-2.548,2.548-2.548h8.904c1.405,0,2.548,1.143,2.548,2.548v8.452Zm-3-8h-8v5h2.099l1.907,1.68,1.943-1.68h2.051V3Z"/>
</svg>

);
