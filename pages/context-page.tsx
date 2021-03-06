import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'
import Layout from '../components/Layout'
import StateProivder from '../context/StateProivder'

const ContextPage: React.VFC = () => {
  return (
    <Layout title="Context">
      <p className="text-4xl mb-10">context page</p>
      <StateProivder>
        <ContextA />
        <ContextB />
      </StateProivder>
    </Layout>
  )
}
export default ContextPage
