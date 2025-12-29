import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFaceConfounded = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.855,15.102l-2.828,2.857-2.504-2.504-2.523,2.498-2.525-2.5-2.531,2.506-2.801-2.859,.715-.699,2.098,2.141,2.52-2.494,2.525,2.5,2.527-2.502,2.496,2.496,2.121-2.143,.711,.703Zm4.145-3.102c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Zm-5.021-.357l-2.679-2.143,2.679-2.143-.625-.781-3.655,2.924,3.655,2.924,.625-.781Zm-11.334,.781l3.655-2.924-3.655-2.924-.625,.781,2.679,2.143-2.679,2.143,.625,.781Z"/></svg>

);
