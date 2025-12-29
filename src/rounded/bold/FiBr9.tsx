import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBr9 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.987,7.805C19.758,3.636,16.42,.182,12.351,.008c-2.154-.099-4.205,.66-5.782,2.119-1.578,1.46-2.488,3.445-2.563,5.591-.073,2.103,.737,4.206,2.225,5.771,1.484,1.562,3.54,2.478,5.64,2.512,1.904,.015,3.648-.577,5.091-1.721-.391,3.771-3.587,6.721-7.46,6.721h-2c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h2c5.79,0,10.5-4.71,10.5-10.5,0,0-.004-5.631-.013-5.695Zm-7.987,5.195c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/></svg>

);
