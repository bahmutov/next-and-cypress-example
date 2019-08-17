/**
 * Middleware for returning server-side code coverage
 * for Next.js API route.
 * @see https://nextjs.org/docs#api-routes
 * @see https://github.com/cypress-io/code-coverage
 */
export default (req, res) => {
  // only GET is supported
  res.status(200).json({
    coverage: global.__coverage__ || null
  })
}
