import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.458,19.841l.542.349.542-.349c.457-.294,4.458-2.952,4.458-5.681,0-1.743-1.346-3.16-3-3.16-.782,0-1.477.27-2,.727-.523-.457-1.218-.727-2-.727-1.654,0-3,1.417-3,3.16,0,2.729,4.002,5.386,4.458,5.681Zm-1.458-6.841c.498,0,1,.309,1,1h2c0-.691.502-1,1-1,.551,0,1,.521,1,1.16,0,1.04-1.611,2.617-3,3.626-1.389-1.01-3-2.586-3-3.626,0-.64.449-1.16,1-1.16ZM21,0H3C1.346,0,0,1.346,0,3v6h1v15h22v-15h1V3c0-1.654-1.346-3-3-3Zm0,22H3v-13h18v13Zm1-15H2V3c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v4Z"/>
</svg>

);
