// @jsx jsx
import { jsx, Flex } from 'theme-ui'

export default ({ children, ...props }) => (
  <Flex
    sx={{
      flexDirection: ['column', 'row'],
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </Flex>
)
