import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookmarkSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,18.879V3.5c0-1.378-1.121-2.5-2.5-2.5H5.559c-.673,0-1.283.271-1.733.705L2.161.04.04,2.161l21.8,21.8,2.121-2.121-2.961-2.961Zm-3-14.879v11.879L6.121,4h11.879Zm-9.205,9.804l2.121,2.121-7.917,8.075v-15.991l3,3v5.646l2.795-2.851Z"/></svg>

);
