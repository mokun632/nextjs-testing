import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { getPage, initTestHelpers } from 'next-page-tester'
import { cleanup, render, screen } from '@testing-library/react'

initTestHelpers()
const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 3,
            id: 3,
            title: 'Static task C',
            completed: true,
          },
          {
            userId: 4,
            id: 4,
            title: 'Static task D',
            completed: false,
          },
        ])
      )
    }
  )
)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close
})

describe(`Todo Page / getStaticProps`, () => {
  it('Should render the list of tasks pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/task-page',
    })
    render(page)
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    expect(screen.getByText('Static task C')).toBeInTheDocument()
    expect(screen.getByText('Static task D')).toBeInTheDocument()
  })
})
