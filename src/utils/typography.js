import Typography from 'typography'

const bodyFontStack = [
  'Avenir',
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
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  scaleRatio: 1,
  headerColor: '#16133f',
  headerFontFamily: headerFontStack,
  headerWeight: '500',
  bodyColor: '#16133fd8',
  bodyWeight: '500',
  bodyFontFamily: bodyFontStack,
  overrideStyles: ({ rhythm }) => ({
    li: {
      marginBottom: rhythm(1),
    },
    h1: {
      fontFamily: 'Leitura Display',
    },
  }),
})

typography.injectStyles()

const { rhythm } = typography

export { rhythm, typography as default }
