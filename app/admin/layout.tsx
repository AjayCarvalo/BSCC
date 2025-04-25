// admin/layout.tsx
export const metadata = {
  title: 'Admin Dashboard',
  description: 'Private admin panel',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
   
      <div style={{ margin: 0, padding: '2rem', backgroundColor: '#f9fafb' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔐 Admin Panel</h1>
        {children}
      </div>
   
  )
}
