export const LogoutButton = () => {
  //const dispatch = useAppDispatch();

  const handleLogout = () => {
    //dispatch(logout());
  }
  return (
    <button
      onClick={handleLogout}
      className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Logout
    </button>
  )
}
