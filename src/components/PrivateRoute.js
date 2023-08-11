// // Повинен повторювати API компонента роута від браузера

// import { useSelector } from 'react-redux';
// import { Route, redirect, Navigate } from 'react-router-dom';
// import { selectIsLogedIn } from 'redux/auth/selectors';

// //
// export default function PrivateRoute({ children, ...routeProps }) {
//   const isLogedIn = useSelector(selectIsLogedIn);

//   console.log(children);

//   return !isLogedIn ? <Navigate {...routeProps} /> : children;
//   //   return (
//   //     <Route {...routeProps}>
//   //       {isLogedIn ? children : (redirect = '/login')}
//   //     </Route>
//   //   ); // ContactsPage - це children, path={} та ве інше буде в параметрі 'routeProps'
// }
// //
// // <Redirect to="/login"/> компонент, при його виклику перенаправить по заданому маршруту
// /*
//  - якщо маршрут приватний і користувач залогінений, рендеримо потрібний(Контакти) компонент
//  - як що не залогінений то рендеримо компонент Redirect
// */
