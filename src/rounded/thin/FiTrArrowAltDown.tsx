import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowAltDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.541,17.79c-.204-.487-.656-.79-1.181-.79h-3.86V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V17h-3.86c-.524,0-.977,.303-1.181,.79-.202,.485-.096,1.039,.272,1.412l4.361,4.418c.242,.246,.564,.38,.907,.38s.665-.135,.907-.38l4.362-4.418c.367-.373,.474-.927,.271-1.412Zm-.983,.709l-4.361,4.418c-.105,.106-.287,.106-.393,0l-4.36-4.418c-.125-.126-.084-.269-.062-.324,.022-.053,.092-.175,.258-.175h8.721c.166,0,.235,.123,.258,.175,.022,.055,.063,.198-.061,.324Z"/></svg>

);
