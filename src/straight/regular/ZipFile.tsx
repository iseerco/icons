import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZipFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h18.414l5.586-5.586V3c0-1.654-1.346-3-3-3ZM2,3c0-.552.449-1,1-1h18c.551,0,1,.448,1,1v13h-6v6H2V3Zm16,18.586v-3.586h3.586l-3.586,3.586ZM9.5,5h1.28v6h-1.28v-6Zm-3.453,4.827h2.224v1.199h-3.768v-.909l2.221-3.918h-2.224v-1.199h3.766l.003.908-2.221,3.919Zm7.919-4.827h-1.967v6.069h1.25v-2.096l.717-.003c1.109,0,2.012-.891,2.012-1.985s-.902-1.985-2.012-1.985Zm0,2.72l-.71.003-.005-1.473h.715c.413,0,.762.336.762.735s-.349.735-.762.735Z"/>
</svg>

);
