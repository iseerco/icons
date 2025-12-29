import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowAltCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4.361-11h-3.861V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v6.5h-3.861c-.524,0-.976,.302-1.18,.79-.203,.485-.096,1.039,.272,1.412l4.361,4.419c.242,.245,.564,.38,.908,.38s.666-.135,.908-.38l4.36-4.418c.368-.373,.475-.927,.272-1.412-.204-.487-.655-.79-1.18-.79Zm.196,1.499l-4.36,4.418c-.106,.107-.288,.107-.393,0l-4.36-4.418c-.125-.126-.084-.269-.062-.324,.022-.052,.091-.175,.257-.175h8.722c.166,0,.235,.123,.257,.175,.023,.056,.063,.198-.062,.324Z"/></svg>

);
