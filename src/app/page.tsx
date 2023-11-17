'use client';
import styles from './page.module.css';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Home() {
	const { open: openConnectModal } = useWeb3Modal();
	return (
		<main className={styles.main}>
			<div>
				<button onClick={() => openConnectModal && openConnectModal()}>
					Connect Wallet
				</button>
			</div>
		</main>
	);
}
