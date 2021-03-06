import { Redirect } from 'umi'

export default (props) => {
  const { isLogin } = { isLogin: false } // useAuth();
  if (isLogin) {
    return (
      <div>{ props.children }</div>
    )
  } else {
    return (
      <Redirect to="/login" />
    )
  }
}
