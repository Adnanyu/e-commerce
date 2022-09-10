import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/nav/nav.component';
import SignIn from './routes/signin/sign-in.component';
import './categories.scss'

const Shop = () => {
  return <h1>i am the shop page</h1>
}

const App= () => {
  return(
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-IN' element={<SignIn />} />
    </Route >
  </Routes>
  )
}

export default App;
