import { useWeb3Modal } from '@web3modal/wagmi/react';

const Button = () => {
	const { open: openConnectModal } = useWeb3Modal();
	const handleClick = async () => {
		console.log('openConnectModal', await openConnectModal());
		openConnectModal && openConnectModal();
	};
	return (
		<div>
			<button onClick={handleClick}>hi</button>
		</div>
	);
};

export default Button;
