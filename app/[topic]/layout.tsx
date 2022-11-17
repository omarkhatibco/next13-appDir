export default function Layout({ children }) {
  return (
    <div className='flex gap-4'>
      <aside className='w-48'>Filter</aside>
      <div className='w-full'>{children}</div>
    </div>
  );
}
