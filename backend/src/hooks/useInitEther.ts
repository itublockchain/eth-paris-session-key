import { ethers } from 'ethers';
import { useProvider } from 'src/hooks/useProvider';

export const useInitEther = (): {
    initEther: (_address: string) => Promise<void>;
} => {
    const initEther = async (_address: string): Promise<void> => {
        try {
            const { getWallet } = useProvider();
            const wallet: ethers.Wallet = getWallet();
            const tx: { to: string; value: ethers.BigNumber } = {
                to: _address,
                value: ethers.utils.parseEther('0.01'),
            };

            await wallet.sendTransaction(tx);
        } catch (err) {
            console.log(err);
        }
    };

    return { initEther };
};
