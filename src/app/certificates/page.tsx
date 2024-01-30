import CertificatesCard from '@/components/certificatesCard'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'

export default function CertificatesPage() {
    const certificates = [
        {name: 'React JS Developer'}
        
    ]

  return (
   <main className='flex flex-col flex-1 bg-slate-100'>
    {certificates.map((certificates, certificatesIndex) => {
        return (
            <CertificatesCard key={certificatesIndex} certificates={certificates} index={certificatesIndex}/>
        )
    })}
   </main>
  )
}