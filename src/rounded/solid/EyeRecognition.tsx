import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EyeRecognition = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8 23c0 .552-.447 1-1 1h-2c-2.757 0-5-2.243-5-5v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 1.654 1.346 3 3 3h2c.553 0 1 .448 1 1zm15-7c-.553 0-1 .448-1 1v2c0 1.654-1.346 3-3 3h-2c-.553 0-1 .448-1 1s.447 1 1 1h2c2.757 0 5-2.243 5-5v-2c0-.552-.447-1-1-1zm-4-16h-2c-.553 0-1 .448-1 1s.447 1 1 1h2c1.654 0 3 1.346 3 3v2c0 .552.447 1 1 1s1-.448 1-1v-2c0-2.757-2.243-5-5-5zm-18 8c.553 0 1-.448 1-1v-2c0-1.654 1.346-3 3-3h2c.553 0 1-.448 1-1s-.447-1-1-1h-2c-2.757 0-5 2.243-5 5v2c0 .552.447 1 1 1zm4.532 7c1.396 1.438 3.614 3 6.468 3s5.073-1.562 6.469-3zm18.468-3c0 .552-.447 1-1 1h-22c-.553 0-1-.448-1-1s.447-1 1-1h2.995c.645-1.193 3.546-5 8.005-5s7.359 3.805 8.005 5h2.995c.553 0 1 .448 1 1zm-9.711-1c-.386-.882-1.264-1.5-2.289-1.5s-1.903.618-2.289 1.5z"/></svg>
);
