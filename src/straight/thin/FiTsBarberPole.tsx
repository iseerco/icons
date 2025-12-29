import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBarberPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,6v-1h-1.09c-.478-2.833-2.942-5-5.91-5s-5.431,2.167-5.91,5h-1.09v1h1v12h-1v1h1.09c.478,2.833,2.942,5,5.91,5s5.431-2.167,5.91-5h1.09v-1h-1V6h1ZM12,1c2.414,0,4.434,1.721,4.899,4H7.101c.465-2.279,2.484-4,4.899-4Zm5,11.343l-6.739-6.343h3.032l3.707,3.707v2.635Zm-8.199-6.343l8.199,7.716v2.577L7,6.293v-.293h1.801Zm1.906,12l-3.707-3.707v-2.586l6.293,6.293h-2.586Zm-3.707-2.293l2.293,2.293h-2.293v-2.293Zm5,7.293c-2.414,0-4.434-1.721-4.899-4h9.798c-.465,2.279-2.484,4-4.899,4Zm2.707-5l-7.707-7.707v-2.586l10,10v.293h-2.293Zm2.293-9.707l-2.293-2.293h2.293v2.293Z"/>
</svg>

);
