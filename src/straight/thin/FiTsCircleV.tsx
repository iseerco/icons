import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircleV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4.909-16.25h1.077l-4.364,10.822c-.289.563-.926.928-1.622.928-.722,0-1.345-.386-1.681-1.063L5.862,6.75h1.083l4.284,10.271c.151.304.433.479.773.479.367,0,.636-.199.711-.343l4.196-10.407Z"/></svg>

);
