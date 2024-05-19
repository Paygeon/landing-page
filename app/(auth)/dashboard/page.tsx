export const metadata = {
    title: 'Dashboard - Lendflow Sucks',
    description: 'Page description',
  }
  
import { Dashboard } from '@/components/Dashboard/Dashboard'
  import Link from 'next/link'
  
  export default function DashboardHome() {
    return (
     <>
     <Dashboard />
     </>
    )
  }