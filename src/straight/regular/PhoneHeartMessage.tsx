import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhoneHeartMessage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M14,18h2v3c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3V0H16V3h0c-.716,0-1.396,.203-1.999,.555v-1.555H2v14H12v2H2v3c0,.552,.449,1,1,1H13c.552,0,1-.448,1-1v-3ZM24,7.001v6.999h-5.5l-2.826,1.827c-.723,.463-1.672-.057-1.672-.915l-.002-7.911c0-1.1,.899-2.001,1.999-2.001h6c1.105,0,2.001,.896,2.001,2.001Zm-2,1.65c0-.911-.672-1.65-1.5-1.65s-1.5,.739-1.5,1.65c0-.911-.672-1.65-1.5-1.65s-1.5,.739-1.5,1.65c0,1.728,3,3.85,3,3.85,0,0,3-2.122,3-3.85Zm-12,12.349v-2H6v2h4Z"/>
</svg>

);
