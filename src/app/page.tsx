'use client';
import styles from './page.module.css';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import styled from 'styled-components';

export default function Home() {
	const { open: openConnectModal } = useWeb3Modal();
	return (
		<main className={styles.main}>
			<Wrapper>
				<Button onClick={() => openConnectModal && openConnectModal()}>
					Connect Wallet
				</Button>
			</Wrapper>
		</main>
	);
}

const Button = styled.button`
	padding: 10px 20px;
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 500px;
`;
