import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHatWinter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.42,18.358c-.508-5.38-3.399-11.933-7.843-13.824.268-.449.423-.974.423-1.534,0-1.654-1.346-3-3-3s-3,1.346-3,3c0,.56.155,1.085.423,1.534-4.444,1.891-7.335,8.444-7.843,13.824-.94.507-1.58,1.501-1.58,2.642,0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3,0-1.141-.64-2.135-1.58-2.642ZM12,7c3.518,0,6.692,5.711,7.368,11H4.632c.128-.999.344-2.012.635-3h9.232c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5H6.427c1.401-2.866,3.423-5,5.573-5Z"/>
</svg>

);
