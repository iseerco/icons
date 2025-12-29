import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMonument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23.5c0,.276-.224,.5-.5,.5H.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H23.5c.276,0,.5,.224,.5,.5ZM2,19.5c0-.276,.224-.5,.5-.5h2.565l1.97-14.196c.134-.964,.586-1.875,1.275-2.563l1.215-1.215c1.321-1.322,3.628-1.322,4.949,0l1.215,1.215c.689,.689,1.142,1.599,1.275,2.563l1.97,14.196h2.565c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H2.5c-.276,0-.5-.224-.5-.5ZM16.122,6h-3.622v13h5.426l-1.804-13Zm-8.105-1h7.966l-.008-.059c-.104-.75-.457-1.458-.992-1.994l-1.215-1.215c-.944-.944-2.591-.944-3.535,0l-1.215,1.215c-.536,.536-.888,1.244-.992,1.994l-.008,.059Zm-1.943,14h5.426V6h-3.622l-1.804,13Z"/></svg>

);
