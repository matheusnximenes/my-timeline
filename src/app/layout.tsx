import { StateProvider } from '@/providers/StateProvider'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const noto_sans = Noto_Sans({
	weight: ['400', '700'], // Specify desired weights
	subsets: ['latin'] // Specify desired subsets
})

// export const metadata: Metadata = {
// 	title: 'Bible Timeline',
// 	description: 'jw.org - Jehovah’s Witnesses'
// }

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${noto_sans.className}`}>
				<StateProvider>{children}</StateProvider>
			</body>
		</html>
	)
}
