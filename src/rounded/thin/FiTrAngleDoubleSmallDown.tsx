import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleDoubleSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,18c-.916,0-1.777-.357-2.424-1.004l-4.417-4.13c-.202-.188-.212-.505-.024-.707,.189-.203,.505-.213,.707-.024l4.429,4.142c.942,.941,2.528,.93,3.446,.012l4.441-4.154c.202-.19,.519-.178,.707,.024,.188,.202,.178,.518-.023,.707l-4.43,4.142c-.636,.636-1.496,.993-2.412,.993Zm.339-5.133l6.5-6c.203-.187,.216-.503,.028-.707-.187-.202-.503-.215-.706-.028l-6.161,5.687L5.839,6.133c-.203-.188-.521-.174-.707,.028-.188,.203-.175,.52,.028,.707l6.5,6c.096,.088,.218,.133,.339,.133s.243-.044,.339-.133Z"/></svg>

);
