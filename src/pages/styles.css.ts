import { style } from '@vanilla-extract/css';

export const page = style({
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
});

export const heading = style({
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
});

export const paragraph = style({
  marginBottom: 48,
});
export const code = style({
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
});
