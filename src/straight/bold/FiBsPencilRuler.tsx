import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPencilRuler = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.053,9.364c-1.393-1.392-1.393-3.612-.028-4.977L5.393,.02l5.105,4.907-2.079,2.162-2.984-2.868-2.288,2.288c-.195,.195-.195,.512,0,.707l2.592,2.46-2.065,2.176-2.62-2.487Zm18.046,4.164l-2.163,2.078,2.869,2.985-2.288,2.288c-.194,.193-.512,.195-.68,.028l-2.487-2.621-2.176,2.064,2.515,2.649c.683,.683,1.578,1.023,2.475,1.023s1.792-.342,2.475-1.023l4.368-4.368-4.907-5.104Zm3.715-6.618L5.724,24H0v-5.725L17.09,1.186c.764-.765,1.78-1.186,2.862-1.186s2.098,.421,2.862,1.186h0c1.577,1.578,1.577,4.146,0,5.725Zm-5.666,1.424l-1.482-1.482L3,19.518v1.482h1.482l12.667-12.666Z"/></svg>

);
