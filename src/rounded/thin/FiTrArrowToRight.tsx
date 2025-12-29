import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,5c-.276,0-.5,.224-.5,.5v5.599c-.124-.321-.31-.617-.561-.867l-5.086-5.086c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l5.086,5.086c.16,.16,.275,.353,.349,.561H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H22.081c-.074,.208-.188,.4-.349,.561l-5.086,5.086c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l5.086-5.086c.251-.25,.437-.546,.561-.867v5.599c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V5.5c0-.276-.224-.5-.5-.5Z"/></svg>

);
