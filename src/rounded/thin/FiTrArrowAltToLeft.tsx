import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowAltToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,11.5H8v-3.861c0-.524-.302-.976-.79-1.18-.485-.203-1.039-.095-1.412,.272L1.38,11.092c-.245,.242-.38,.564-.38,.908s.135,.666,.38,.908l4.418,4.36c.247,.244,.575,.374,.909,.374,.169,0,.34-.033,.503-.102,.487-.204,.79-.655,.79-1.18v-3.861h15.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM7,16.361c0,.166-.123,.235-.175,.257-.055,.023-.198,.063-.324-.062L2.083,12.197c-.054-.053-.083-.123-.083-.197s.029-.144,.083-.196L6.501,7.443c.068-.067,.141-.086,.202-.086,.053,0,.097,.014,.123,.025,.052,.022,.175,.091,.175,.257v8.722ZM1,3.5V21c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V3.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Z"/></svg>

);
