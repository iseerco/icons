import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCalendarCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,2h-1.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5H7V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5h-1.5C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm15,20H4.5c-1.93,0-3.5-1.57-3.5-3.5V9H23v10.5c0,1.93-1.57,3.5-3.5,3.5Zm-.652-10.859c.192,.198,.188,.514-.01,.707l-6.596,6.424c-.484,.484-1.122,.727-1.762,.727s-1.281-.244-1.77-.732l-3.562-3.401c-.199-.19-.207-.507-.016-.707,.189-.2,.506-.208,.707-.016l3.569,3.409c.581,.582,1.562,.575,2.13,.008l6.601-6.429c.196-.191,.514-.189,.707,.01Z"/></svg>

);
