import Typography from 'typography'

const bodyFontStack = [
  'Rubik',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Fira Sans',
  'Cantarell',
  'Ubuntu',
  'sans-serif',
]
const headerFontStack = [...bodyFontStack]

const typography = new Typography({
  title: 'kbrgl',
  baseFontSize: '14px',
  baseLineHeight: 1.8,
  scaleRatio: 1.2,
  headerColor: '#232230',
  headerFontFamily: headerFontStack,
  headerWeight: '500',
  bodyColor: '#38365a',
  bodyFontFamily: bodyFontStack,
  googleFonts: [
    {
      name: 'Rubik',
      styles: ['400', '500'],
    },
  ],
})

typography.injectStyles()

const { rhythm } = typography

export { rhythm, typography as default }
