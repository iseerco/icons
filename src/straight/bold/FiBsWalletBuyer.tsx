import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWalletBuyer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,15c0-2.045-1.237-3.803-3-4.576v-2.387l-17.003-.037c-.346,0-.676-.058-.997-.141v10.141c0,.551.449,1,1,1h9.026c-.635.838-1.026,1.87-1.026,3H4c-2.206,0-4-1.794-4-4V4C0,1.778,1.781.021,4.056,0h19.944v3H4.069c-.604.005-1.069.436-1.069,1,0,.551.449,1,1,1l20.003.043-.003,9.957Zm-3,4h-4c-1.654,0-3,1.346-3,3v2h10v-2c0-1.654-1.346-3-3-3Zm1-4c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"/>
</svg>

);
