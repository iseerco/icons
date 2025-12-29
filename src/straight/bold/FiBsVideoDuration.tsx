import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVideoDuration = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3.5v9.221c-.815-.926-1.838-1.663-3-2.134V3.5c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5.224-.5.5v13.5h7.069c-.041.328-.069.661-.069,1,0,.692.097,1.36.262,2H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-15,2.722v7.778l7-3.889-7-3.889Zm15,11.778c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2.793,1.793l-2.207-2.207v-3.586h-2v4.414l2.793,2.793,1.414-1.414Z"/>
</svg>

);
