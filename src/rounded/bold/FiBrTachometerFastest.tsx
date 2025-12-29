import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTachometerFastest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13a11.9,11.9,0,0,1-3.482,8.442,3.512,3.512,0,0,1-4.718.276l-1.282-1.04a1.5,1.5,0,1,1,1.888-2.33l1.283,1.04a.524.524,0,0,0,.7-.059A9,9,0,1,0,5.6,19.319a.519.519,0,0,0,.7.057l1.243-1.028A1.5,1.5,0,1,1,9.456,20.66L8.215,21.687a3.505,3.505,0,0,1-4.751-.258A11.972,11.972,0,0,1,.1,11.442C1.247,2,12.979-2.358,20,4.056A12.015,12.015,0,0,1,24,13Zm-7.431,2.933a1.5,1.5,0,0,0,.862-2.874L13.7,11.944a2,2,0,1,0-.862,2.873Z"/></svg>

);
